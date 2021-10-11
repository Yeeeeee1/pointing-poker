import { ThunkDispatch } from "redux-thunk";
import { History } from "history";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { removeRoomId, setNewRoom } from "../action-creators/lobby";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import { IRoom } from "../../../../../server/src/shared/interfaces/models";
import setUser, { setCurrentUser, setUsers } from "../action-creators/user";
import { setMessages } from "../action-creators/chat";
import { ConnectionResult } from "../../../shared/interfaces/models";

export const createRoomAndGetRoomID =
  (history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    const getRoomData = (roomName: string, createdRoomId: string): void => {
      dispatch(setNewRoom({ id: createdRoomId, name: roomName }));
      history.push("/lobby");
      dispatch(setCurrentUser(createdRoomId));
    };

    socket.emit(SocketEvent.ROOM_CREATE, getRoomData);
  };

export const joinToRoomAndGetRoomID =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    const getResultOfConnection = (
      result: ConnectionResult,
      data: IRoom,
      userId: string
    ): void => {
      if (result === ConnectionResult.SUCCESS) {
        dispatch(setNewRoom(data));
        dispatch(setUsers(data.users));
        dispatch(setMessages(data.messages));
        console.warn(userId);
        dispatch(setCurrentUser(userId));

        history.push("/lobby");
      } else {
        console.error("join is fail"); // TODO: display an error to the user
      }
    };

    socket.emit(SocketEvent.ROOM_JOIN, roomId, getResultOfConnection);
  };

export const leaveFromRoom =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    const disconnect = () => {
      dispatch(removeRoomId());
      history.push("/");
    };

    socket.emit(SocketEvent.LEAVE_ROOM, roomId, disconnect);
  };
