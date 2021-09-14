import { ThunkDispatch } from "redux-thunk";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { setRoomId } from "../action-creators/lobby";
import { socket, SocketEvent } from "../../../shared/globalVariables";

export const createRoomAndGetRoomID =
  () => (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(SocketEvent.CREATE_ROOM, (createdRoomId: string): void => {
      dispatch(setRoomId(createdRoomId));
      // TODO: handle error
    });
  };

export const joinToRoomAndGetRoomID =
  (roomId: string) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    socket.emit(SocketEvent.JOIN_ROOM, roomId, () => {
      dispatch(setRoomId(roomId));
      // TODO: handle error
    });
  };
