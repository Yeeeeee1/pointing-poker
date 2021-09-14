export interface ILobbyState {
  roomName: string;
  roomId: string;
}

export enum LobbyActionType {
  SET_ROOM_ID = "SET_ROOM_ID",
  SET_ROOM_NAME = "SET_ROOM_NAME",
  UPDATE_ROOM_NAME = "UPDATE_ROOM_NAME",
}

interface ISetRoomId {
  type: LobbyActionType.SET_ROOM_ID;
  payload: string;
}

interface ISetRoomName {
  type: LobbyActionType.SET_ROOM_NAME;
  payload: string;
}

interface IUpdateRoomName {
  type: LobbyActionType.UPDATE_ROOM_NAME;
  payload: string;
}

export type LobbyAction = ISetRoomName | IUpdateRoomName | ISetRoomId;

export interface LobbyReducer {
  lobby: ILobbyState;
}
