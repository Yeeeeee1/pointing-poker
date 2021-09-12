import React, { ReactElement, useEffect } from "react";
import "./lobbyPage.scss";
import { useSelector } from "react-redux";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";
import LobbyIssues from "./LobbyIssues/LobbyIssues";
import { socket } from "../../../shared/globalVariables";
import getAuthState from "../../../redux/store/selectors";

const LobbyPage = (): ReactElement => {
  const { formData } = useSelector(getAuthState);

  useEffect(() => {
    socket.emit("join-room", "roomName", formData, () => {
      console.info("Joined");
    });

    socket.on("message", (mes: string) => {
      alert(mes);
    });

    return () => {
      socket.emit("leave room", formData!.firstName);
    };
  }, []);

  return (
    <section className="lobby">
      <LobbyInfo />
      <LobbyMembers />
      <LobbyIssues />
    </section>
  );
};

export default LobbyPage;
