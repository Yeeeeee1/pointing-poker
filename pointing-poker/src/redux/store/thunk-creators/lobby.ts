import { ThunkDispatch } from "redux-thunk";
import { History } from "history";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { removeRoomId, setNewRoom } from "../action-creators/lobby";
import { socket, SocketEvent } from "../../../shared/globalVariables";

export const createRoomAndGetRoomID =
  (history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(
      SocketEvent.CREATE_ROOM,
      (isSuccessCreated: boolean, createdRoomId: string): void => {
        if (isSuccessCreated) {
          dispatch(setNewRoom(createdRoomId));
          history.push("/lobby");
        }

        // TODO: notify about error
      }
    );
  };

export const joinToRoomAndGetRoomID =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(SocketEvent.JOIN_ROOM, roomId, (isSuccessJoin: boolean) => {
      if (isSuccessJoin) {
        dispatch(setNewRoom(roomId));
        history.push("/lobby");
      }

      // TODO: notify about error
    });
  };

export const leaveFromRoom =
  (roomId: string, history: History) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(SocketEvent.LEAVE_ROOM, roomId, (isSuccessLeave: boolean) => {
      if (isSuccessLeave) {
        dispatch(removeRoomId(roomId));
        history.push("/");
      }

      // TODO: notify about error
    });
  };
