import { ThunkDispatch } from "redux-thunk";
import { History } from "history";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { removeRoomId, setNewRoom } from "../action-creators/lobby";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import { IRoom } from "../../../../../server/src/shared/interfaces/models";
import setUser, { setUsers } from "../action-creators/user";

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
      data: IRoom
    ): void => {
      if (result === ConnectionResult.SUCCESS) {
        dispatch(setNewRoom(data));
        dispatch(setUsers(data.users));

        history.push("/lobby");
      } else {
        console.error("join is fail"); // TODO: display an error to the user
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
