import { ThunkDispatch } from "redux-thunk";
import { History } from "history";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { removeRoomId, setNewRoom } from "../action-creators/lobby";
import { socket, SocketEvent } from "../../../shared/globalVariables";

export const createRoomAndGetRoomID =
  (history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    const getRoomData = (roomName: string, createdRoomId: string): void => {
      dispatch(setNewRoom({ id: createdRoomId, name: roomName }));
      history.push("/lobby");
    };

    socket.emit(SocketEvent.CREATE_ROOM, getRoomData);
  };

export enum ConnectionResult {
  ERROR = "error",
  SUCCESS = "success",
}

export const joinToRoomAndGetRoomID =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    const getResultOfConnection = (
      result: ConnectionResult,
      data: string
    ): void => {
      if (result === ConnectionResult.SUCCESS) {
        dispatch(setNewRoom({ id: roomId, name: data }));
        history.push("/lobby");
      } else {
        console.error(data);
      }
    };

    socket.emit(SocketEvent.JOIN_ROOM, roomId, getResultOfConnection);
  };

export const leaveFromRoom =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(SocketEvent.LEAVE_ROOM, roomId, (isSuccessLeave: boolean) => {
      if (isSuccessLeave) {
        dispatch(removeRoomId());
        history.push("/");
      }

      // TODO: notify about error
    });
  };
