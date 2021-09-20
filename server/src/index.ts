import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { getLogger } from "log4js";
import PORT, { Role, SocketEvent } from "./shared/globalVariables";
import store, {
  createNewRoom,
  excludeUser,
  getRoom,
  joinNewUserToRoom,
  removeRoom,
  setMessage,
  updateRoomName,
} from "./store/store";
import { ConnectResult, IRoom, IUser } from "./shared/interfaces/models";

require("dotenv").config();

const logger = getLogger();
logger.level = "debug";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.URL,
  },
});

app.use(cors());

io.on(SocketEvent.CONNECTION, (socket: Socket) => {
  const changeRoomName = () => {
    socket.on(
      SocketEvent.ROOM_UPDATE_NAME,
      (roomId: string, newRoomName: string) => {
        updateRoomName(roomId, newRoomName);

        io.to(roomId).emit(SocketEvent.ROOM_UPDATE_NAME, roomId, newRoomName);
      }
    );
  };

  socket.on(
    SocketEvent.ROOM_CREATE,
    (notifyAboutSuccess: (roomName: string, createdRoomId: string) => void) => {
      try {
        const roomName = createNewRoom(socket.id);

        notifyAboutSuccess(roomName, socket.id);

        changeRoomName();
      } catch (error) {
        logger.debug(error);
      }
    }
  );

  socket.on(
    SocketEvent.ROOM_JOIN,
    (
      roomId: string,
      notifyAboutConnect: (
        connectResult: ConnectResult,
        data: IRoom | string,
        userId?: string
      ) => void
    ) => {
      try {
        const foundRoom = getRoom(roomId);

        if (foundRoom) {
          socket.join(roomId);
          notifyAboutConnect(ConnectResult.SUCCESS, foundRoom, socket.id);
          return;
        }

        notifyAboutConnect(ConnectResult.ERROR, "Room is not exist");
      } catch (error) {
        logger.debug(error);
      }
    }
  );

  socket.on(
    SocketEvent.UPDATE_USERS_LIST,
    (roomId: string, userData: IUser) => {
      try {
        const newUser: IUser = {
          ...userData,
          id: socket.id,
          role: roomId === socket.id ? Role.ADMIN : Role.PARTICIPANT,
        };

        joinNewUserToRoom(roomId, newUser);

        socket.broadcast
          .to(roomId)
          .emit(SocketEvent.JOIN_NOTIFY, `${userData.firstName} joined`);

        io.to(roomId).emit(SocketEvent.GET_NEW_USER, newUser);
      } catch (error) {
        logger.debug(error);
      }
    }
  );

  socket.on(
    SocketEvent.LEAVE_ROOM,
    (roomId: string, getUpdatedUsersList: () => void) => {
      try {
        if (roomId === socket.id) {
          removeRoom(roomId);

          io.socketsLeave(roomId);

          getUpdatedUsersList();
        } else {
          const remainingUsers = excludeUser(roomId, socket.id);

          socket.broadcast
            .to(roomId)
            .emit(SocketEvent.GET_UPDATED_USERS_LIST, remainingUsers);

          socket.leave(roomId);

          getUpdatedUsersList();
        }
      } catch (error) {
        logger.debug(error);
      }
    }
  );

  socket.on(SocketEvent.MESSAGE_SEND, (roomId: string, message: string) => {
    try {
      const newMessage = setMessage(socket.id, roomId, message);

      io.to(roomId).emit(SocketEvent.MESSAGE_SEND, newMessage);
    } catch (error) {
      logger.debug(error);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

const start = () => {
  try {
    httpServer.listen(PORT, () => {
      logger.info(`Listening to ${PORT}`);
    });
  } catch (error) {
    logger.error(error);
  }
};

start();
