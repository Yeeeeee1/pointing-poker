import { IRoom, IStore, IUser } from "../shared/interfaces/models";

const store: IStore = {
  rooms: [],
};

export const updateRooms = (roomName: string, person: IUser): IUser[] => {
  const currentRoom = store.rooms.find((room) => room.name === roomName);
  const newUser: IUser = { ...person, id: Date.now().toString() }; // TODO: set correct id

  if (currentRoom) {
    newUser.role = "participant";

    const updatedRoom: IRoom = {
      ...currentRoom,
      users: [...currentRoom.users, newUser],
    };

    store.rooms = store.rooms.map((room) =>
      room.name === roomName ? updatedRoom : room
    );

    return updatedRoom.users;
  }

  newUser.role = "admin";

  const newRoom: IRoom = {
    name: roomName,
    users: [newUser],
  };

  store.rooms = [...store.rooms, newRoom];

  return newRoom.users;
};

export const excludeUser = (roomName: string, userId: string): IUser[] => {
  const currentRoom = store.rooms.find((room) => room.name === roomName);

  const updatedUsers = currentRoom.users.filter(
    (user) => user.firstName !== userId
  );

  store.rooms = store.rooms.map((room) =>
    room.name === roomName ? { ...room, users: updatedUsers } : room
  );

  return updatedUsers;
};

export default store;
