import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { getLogger } from "log4js";
import PORT, { SocketEvent } from "./shared/globalVariables";
import store, { updateRooms } from "./store/store";
import excludeUser from "./shared/helperFuntions/helperFunctions";
import { IRoom } from "./shared/interfaces/models";

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
  socket.on(SocketEvent.JOIN_ROOM, (roomName, person, cb) => {
    socket.join(roomName);
    cb();

    socket.broadcast
      .to(roomName)
      .emit(SocketEvent.JOIN_NOTIFY, `${person.firstName} joined`);

    updateRooms(roomName, person);
    logger.debug("add to room", store.rooms);

    socket.on(SocketEvent.LEAVE_ROOM, (userName) => {
      excludeUser(roomName, userName);
      socket.leave(roomName);
      logger.debug("leave from room", store.rooms);
    });
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
