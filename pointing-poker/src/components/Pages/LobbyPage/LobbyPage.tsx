import React, { ReactElement, useEffect } from "react";
import "./lobbyPage.scss";
import { useDispatch, useSelector } from "react-redux";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";
import LobbyIssues from "./LobbyIssues/LobbyIssues";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import { getAuthState } from "../../../redux/store/selectors";
import setUsers from "../../../redux/store/action-creators/user";

const LobbyPage = (): ReactElement => {
  const dispatch = useDispatch();
  const { formData } = useSelector(getAuthState);

  useEffect(() => {
    socket.emit(SocketEvent.JOIN_ROOM, "roomName", formData, () => {
      console.info("Joined"); // TODO: implement a nice notification
    });

    socket.on(SocketEvent.JOIN_NOTIFY, (notification: string) => {
      console.info(notification); // TODO: implement a nice notification
    });

    socket.on(SocketEvent.UPDATE_USERS_LIST, (usersData) => {
      console.info("users list updated");
      dispatch(setUsers(usersData));
    });

    return () => {
      socket.emit(SocketEvent.LEAVE_ROOM, "roomName", formData!.firstName); // TODO: Get data about the current user & pass id
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
