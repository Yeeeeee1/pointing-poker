import { io } from "socket.io-client";
import dotenv from "dotenv";
import MainPage from "../components/Pages/MainPage/MainPage";
import LobbyPage from "../components/Pages/LobbyPage/LobbyPage";
import GamePage from "../components/Pages/GamePage/GamePage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

dotenv.config();

export enum RoutePath {
  ROOT = "/",
  GAME = "/game",
  LOBBY = "/lobby",
  ERROR = "*",
}

export enum SocketEvent {
  CONNECT = "connect",
  MESSAGE_SEND = "message:send",
  ROOM_JOIN = "room:join",
  ROOM_CREATE = "room:create",
  ROOM_UPDATE_NAME = "room:update-name",
  UPDATE_USERS_LIST = "update-users-list",
  JOIN_NOTIFY = "join-notify",
  LEAVE_ROOM = "leave-room",
  GET_NEW_USER = "get-new-user",
  GET_UPDATED_USERS_LIST = "get-updated-users-list",
}

export enum Role {
  ADMIN = "admin",
  PARTICIPANT = "participant",
}

export const initFormValue = {
  firstName: "",
  lastName: "",
  jobPosition: "",
};

export const initAuthFormErrors = {
  firstName: false,
  lastName: false,
  jobPosition: false,
};

const routes = [
  {
    path: RoutePath.ROOT,
    name: "Main",
    component: MainPage,
    exact: true,
  },
  {
    path: RoutePath.LOBBY,
    name: "Lobby",
    component: LobbyPage,
    exact: true,
  },
  {
    path: RoutePath.GAME,
    name: "Game",
    component: GamePage,
    exact: true,
  },
  {
    path: RoutePath.ERROR,
    name: "Error",
    component: ErrorPage,
    exact: true,
  },
];

export const socket = io(
  process.env.REACT_APP_SERVER_HOST || "http://localhost:5000/" // TODO: add server URL
);

export default routes;
