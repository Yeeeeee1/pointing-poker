import MainPage from "../components/MainPage/Main";
import LobbyPage from "../components/LobbyPage/LobbyPage";
import GamePage from "../components/GamePage/GamePage";
import SettingsPage from "../components/SettingsPage/SettingsPage";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const routes = [
    {
        path: "/",
        name: "Main",
        component: MainPage,
        exact: true
    },
    {
        path: "/lobby",
        name: "Lobby",
        component: LobbyPage,
        exact: true
    },
    {
        path: "/game",
        name: "Game",
        component: GamePage,
        exact: true
    },
    {
        path: "/settings",
        name: "Settings",
        component: SettingsPage,
        exact: true
    },
    {
        path: "*",
        name: "Error",
        component: ErrorPage,
        exact: true
    }
]
