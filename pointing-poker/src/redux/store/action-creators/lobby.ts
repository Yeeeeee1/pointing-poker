import { Dispatch } from "react";
import { IRoom, LobbyAction, LobbyActionType } from "../../types/lobby";

const setRoomName = (payload: string) => (dispatch: Dispatch<LobbyAction>) => {
  dispatch({ type: LobbyActionType.SET_ROOM_NAME, payload });
};

export const updateRoomName =
  (payload: string) => (dispatch: Dispatch<LobbyAction>) => {
    dispatch({ type: LobbyActionType.UPDATE_ROOM_NAME, payload });
  };

export const setNewRoom =
  (payload: IRoom) => (dispatch: Dispatch<LobbyAction>) => {
    dispatch({ type: LobbyActionType.SET_NEW_ROOM, payload });
  };

export const removeRoomId = () => (dispatch: Dispatch<LobbyAction>) => {
  dispatch({ type: LobbyActionType.REMOVE_ROOM_ID });
};

export default setRoomName;
