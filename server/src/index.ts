import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import cors from "cors";
import { getLogger } from "log4js";
import PORT from "./shared/globalVariables";
import store from "./store/store";

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
  socket.on("join-room", (roomName, person, cb) => {
    socket.join(roomName);
    cb();

    socket.broadcast.to(roomName).emit("message", `${person.firstName} joined`);

    store.users.push(person);

    socket.on("leave room", (userName) => {
      const userIndex = store.users.findIndex(
        (user) => user.firstName === userName
      );

      store.users.splice(userIndex, 1);

      socket.leave(roomName);
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
