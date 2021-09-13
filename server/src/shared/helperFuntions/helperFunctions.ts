import store from "../../store/store";

const excludeUser = (roomName: string, userName: string): void => {
  store.rooms = store.rooms.map((room) =>
    room.name === roomName
      ? {
          name: room.name,
          users: room.users.filter((user) => user.firstName !== userName),
        }
      : room
  );
};

export default excludeUser;
