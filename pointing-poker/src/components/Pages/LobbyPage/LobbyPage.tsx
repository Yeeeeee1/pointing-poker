import React, { ReactElement, useEffect, useState } from "react";
import "./lobbyPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";
import LobbyIssues from "./LobbyIssues/LobbyIssues";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import { getAuthState, getLobbyState } from "../../../redux/store/selectors";
import setRoomName from "../../../redux/store/action-creators/lobby";
import { IUser } from "../../../../../server/src/shared/interfaces/models";
import setUser, { setUsers } from "../../../redux/store/action-creators/user";

const LobbyPage = (): ReactElement => {
  const dispatch = useDispatch();
  const [alertMessage, updateAlertMessage] = useState<string | null>(null);
  const { formData: userData } = useSelector(getAuthState);
  const { roomId: lobbyId } = useSelector(getLobbyState);

  useEffect(() => {
    if (lobbyId) {
      socket.emit(SocketEvent.UPDATE_USERS_LIST, lobbyId, userData);
    }

    return () => {
      socket.off(SocketEvent.UPDATE_USERS_LIST);
    };
  }, [lobbyId]);

  useEffect(() => {
    socket.on(SocketEvent.JOIN_NOTIFY, (notification: string) => {
      updateAlertMessage(notification);

      setTimeout(() => {
        updateAlertMessage(null);
      }, 3000);
    });

    socket.on(SocketEvent.GET_NEW_USER, (user: IUser) => {
      dispatch(setUser(user));
    });

    socket.on(SocketEvent.GET_UPDATED_USERS_LIST, (users: IUser[]) => {
      dispatch(setUsers(users));
    });

    socket.on(
      SocketEvent.ROOM_UPDATE_NAME,
      (roomId: string, newRoomName: string) => {
        dispatch(setRoomName(newRoomName));
      }
    );

    return () => {
      socket.off(SocketEvent.GET_NEW_USER);
      socket.off(SocketEvent.JOIN_NOTIFY);
      socket.off(SocketEvent.GET_UPDATED_USERS_LIST); // TODO: move out
      socket.off(SocketEvent.ROOM_UPDATE_NAME); // TODO: move out
    };
  }, []);

  return (
    <section className="lobby">
      {alertMessage && <Alert variant="success">{alertMessage}</Alert>}
      <LobbyInfo />
      <LobbyMembers />
      <LobbyIssues />
    </section>
  );
};

export default LobbyPage;
