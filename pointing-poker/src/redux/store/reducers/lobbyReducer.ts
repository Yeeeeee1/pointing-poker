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
    case LobbyActionType.SET_NEW_ROOM:
      return {
        ...state,
        roomId: action.payload.id,
        roomName: action.payload.name,
      };
    case LobbyActionType.SET_ROOM_NAME:
      return {
        ...state,
        roomName: action.payload,
      };
    case LobbyActionType.UPDATE_ROOM_NAME:
      return { ...state, roomName: action.payload };
    case LobbyActionType.REMOVE_ROOM_ID:
      return { ...state, roomId: "" };
    default:
      return state;
  }
};

export default userReducer;
