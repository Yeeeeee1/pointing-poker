import MainPage from "../components/MainPage/MainPage";
import LobbyPage from "../components/LobbyPage/LobbyPage";
import GamePage from "../components/GamePage/GamePage";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
    exact: true,
  },
  {
    path: "/lobby",
    name: "Lobby",
    component: LobbyPage,
    exact: true,
  },
  {
    path: "/game",
    name: "Game",
    component: GamePage,
    exact: true,
  },
  {
    path: "*",
    name: "Error",
    component: ErrorPage,
    exact: true,
  },
];

export default routes;
