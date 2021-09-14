import { ILobbyState, LobbyAction, LobbyActionType } from "../../types/lobby";

const initialState: ILobbyState = {
  roomId: "",
  roomName: "",
};

const userReducer = (
  state = initialState,
  action: LobbyAction
): ILobbyState => {
  switch (action.type) {
    case LobbyActionType.SET_ROOM_ID:
      return { ...state, roomId: action.payload };
    case LobbyActionType.SET_ROOM_NAME:
      return { ...state, roomName: action.payload };
    case LobbyActionType.UPDATE_ROOM_NAME:
      return { ...state, roomName: action.payload };
    default:
      return state;
  }
};

export default userReducer;
