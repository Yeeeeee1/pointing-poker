const PORT = process.env.PORT || 5000;
export default PORT;

export enum SocketEvent {
  JOIN_ROOM = "join-room",
  JOIN_NOTIFY = "join-notify",
  LEAVE_ROOM = "leave-room",
}
