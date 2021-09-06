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

export default routes;
