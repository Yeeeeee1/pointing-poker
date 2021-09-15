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
  joinNewUser,
  updateRoomName,
} from "./store/store";
import { IUser } from "./shared/interfaces/models";

require("dotenv").config();

const logger = getLogger();
logger.level = "debug";

logger.debug(process.env.URL);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.URL,
  },
});

app.use(cors());

io.on(SocketEvent.CONNECTION, (socket: Socket) => {
  socket.on(
    SocketEvent.CREATE_ROOM,
    (notifyAboutSuccess: (createdRoomId: string) => void) => {
      createNewRoom(socket.id);

      notifyAboutSuccess(socket.id.toString());

      socket.on(
        SocketEvent.UPDATE_ROOM_NAME,
        (roomId: string, newRoomName: string) => {
          updateRoomName(roomId, newRoomName);

          io.to(roomId).emit(SocketEvent.GET_UPDATED_ROOM_NAME, newRoomName);
        }
      );
    }
  );

  socket.on(
    SocketEvent.JOIN_ROOM,
    (roomId: string, notifyAboutSuccessJoin: () => void) => {
      const foundRoom = getRoom(roomId);

      if (foundRoom) {
        socket.join(roomId);
        notifyAboutSuccessJoin();
      } else {
        logger.debug("room is not exist");
      }
    }
  );

  socket.on(SocketEvent.UPDATE_ROOM, (roomId: string, userData: IUser) => {
    joinNewUser(roomId, {
      ...userData,
      role: roomId === socket.id ? Role.ADMIN : Role.PARTICIPANT,
    });

    socket.broadcast
      .to(roomId)
      .emit(SocketEvent.JOIN_NOTIFY, `${userData.firstName} joined`);

    const foundRoom = getRoom(roomId);

    io.to(roomId).emit(SocketEvent.GET_UPDATED_USERS_LIST, foundRoom.users);
  });

  socket.on(SocketEvent.LEAVE_ROOM, (roomName, userId) => {
    const remainingUsers = excludeUser(roomName, userId);
    socket.leave(roomName);

    io.to(roomName).emit(SocketEvent.GET_UPDATED_USERS_LIST, remainingUsers);

    logger.debug("leave from room", store.rooms);
  }); // TODO: rewrite method
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
