import MainPage from "../components/Pages/MainPage/Main";
import LobbyPage from "../components/Pages/LobbyPage/LobbyPage";
import GamePage from "../components/Pages/GamePage/GamePage";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";

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
