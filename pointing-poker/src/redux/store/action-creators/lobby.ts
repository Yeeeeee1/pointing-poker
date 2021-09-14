import { Dispatch } from "react";
import { LobbyAction, LobbyActionType } from "../../types/lobby";

const setRoomName = (payload: string) => (dispatch: Dispatch<LobbyAction>) => {
  dispatch({ type: LobbyActionType.SET_ROOM_NAME, payload });
};

export const updateRoomName =
  (payload: string) => (dispatch: Dispatch<LobbyAction>) => {
    dispatch({ type: LobbyActionType.UPDATE_ROOM_NAME, payload });
  };

export const setRoomId =
  (payload: string) => (dispatch: Dispatch<LobbyAction>) => {
    dispatch({ type: LobbyActionType.SET_ROOM_ID, payload });
  };

export default setRoomName;
