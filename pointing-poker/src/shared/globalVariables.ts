import { io } from "socket.io-client";
import MainPage from "../components/Pages/MainPage/MainPage";
import LobbyPage from "../components/Pages/LobbyPage/LobbyPage";
import GamePage from "../components/Pages/GamePage/GamePage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

export enum RoutePath {
  ROOT = "/",
  GAME = "/game",
  LOBBY = "/lobby",
  ERROR = "*",
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

export const socket = io("http://localhost:5000/");

export default routes;
