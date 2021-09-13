import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { getLogger } from "log4js";
import PORT, { SocketEvent } from "./shared/globalVariables";
import store, { excludeUser, updateRooms } from "./store/store";
import { IUser } from "./shared/interfaces/models";

const logger = getLogger();
logger.level = "debug";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.use(cors());

io.on("connection", (socket: Socket) => {
  socket.on(
    SocketEvent.JOIN_ROOM,
    (roomName: string, person: IUser, notifyAboutSuccessJoin: () => void) => {
      socket.join(roomName);
      notifyAboutSuccessJoin();

      socket.broadcast
        .to(roomName)
        .emit(SocketEvent.JOIN_NOTIFY, `${person.firstName} joined`);

      const users = updateRooms(roomName, person);
      io.to(roomName).emit(SocketEvent.UPDATE_USERS_LIST, users);

      logger.debug("add to room", store.rooms);
    }
  );

  socket.on(SocketEvent.LEAVE_ROOM, (roomName, userId) => {
    const remainingUsers = excludeUser(roomName, userId);
    socket.leave(roomName);

    io.to(roomName).emit(SocketEvent.UPDATE_USERS_LIST, remainingUsers);

    logger.debug("leave from room", store.rooms);
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
