const PORT = process.env.PORT || 5000;
export default PORT;

export enum SocketEvent {
  CONNECTION = "connection",
  GET_UPDATED_ROOM_NAME = "get-updated-room-name",
  CREATE_ROOM = "create-room",
  UPDATE_ROOM = "update-room",
  JOIN_ROOM = "join-room",
  JOIN_NOTIFY = "join-notify",
  LEAVE_ROOM = "leave-room",
  GET_UPDATED_USERS_LIST = "get-updated-users-list",
  UPDATE_ROOM_NAME = "update-room-name",
}

export enum Role {
  ADMIN = "admin",
  PARTICIPANT = "participant",
}
