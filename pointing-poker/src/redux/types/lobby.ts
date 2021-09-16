export interface IRoom {
  id: string;
  name: string;
}

export interface ILobbyState {
  roomId: string;
  roomName: string;
}

export enum LobbyActionType {
  SET_NEW_ROOM = "SET_NEW_ROOM",
  SET_ROOM_NAME = "SET_ROOM_NAME",
  UPDATE_ROOM_NAME = "UPDATE_ROOM_NAME",
  REMOVE_ROOM_ID = "REMOVE_ROOM_ID",
}

interface IRemoveRoomID {
  type: LobbyActionType.REMOVE_ROOM_ID;
}

interface ISetRoomId {
  type: LobbyActionType.SET_NEW_ROOM;
  payload: IRoom;
}

interface ISetRoomName {
  type: LobbyActionType.SET_ROOM_NAME;
  payload: string;
}

interface IUpdateRoomName {
  type: LobbyActionType.UPDATE_ROOM_NAME;
  payload: string;
}

export type LobbyAction =
  | ISetRoomName
  | IUpdateRoomName
  | ISetRoomId
  | IRemoveRoomID;

export interface LobbyReducer {
  lobby: ILobbyState;
}
