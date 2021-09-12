import React, { ReactElement, useEffect } from "react";
import "./lobbyPage.scss";
import { useSelector } from "react-redux";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";
import LobbyIssues from "./LobbyIssues/LobbyIssues";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import getAuthState from "../../../redux/store/selectors";

const LobbyPage = (): ReactElement => {
  const { formData } = useSelector(getAuthState);

  useEffect(() => {
    socket.emit(SocketEvent.JOIN_ROOM, "roomName", formData, () => {
      console.info("Joined"); // TODO: implement a nice notification
    });

    socket.on(SocketEvent.JOIN_NOTIFY, (notification: string) => {
      alert(notification); // TODO: implement a nice notification
    });

    return () => {
      socket.emit(SocketEvent.LEAVE_ROOM, formData!.firstName);
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
