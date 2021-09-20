const PORT = process.env.PORT || 5000;
export default PORT;

export enum SocketEvent {
  MESSAGE_SEND = "message:send",
  ROOM_JOIN = "room:join",
  ROOM_CREATE = "room:create",
  ROOM_UPDATE_NAME = "room:update-name",
  CONNECTION = "connection",
  UPDATE_USERS_LIST = "update-users-list",
  JOIN_NOTIFY = "join-notify",
  LEAVE_ROOM = "leave-room",
  GET_NEW_USER = "get-new-user",
  GET_UPDATED_USERS_LIST = "get-updated-users-list",
}

export enum Role {
  ADMIN = "admin",
  PARTICIPANT = "participant",
}
