import { IRoom, IStore, IUser } from "../shared/interfaces/models";

const store: IStore = {
  rooms: [],
};

export const createNewRoom = (roomId: string): string => {
  const defaultRoomName = `Room № ${store.rooms.length}`;

  const newRoom: IRoom = {
    id: roomId,
    name: defaultRoomName,
    users: [],
  };

  store.rooms = [...store.rooms, newRoom];

  return defaultRoomName;
};

export const joinNewUserToRoom = (roomId: string, newUser: IUser) => {
  const currentRoom = store.rooms.find((room) => room.id === roomId);

  const updatedRoom: IRoom = {
    ...currentRoom,
    users: [...currentRoom.users, newUser],
  };

  store.rooms = store.rooms.map((room) =>
    room.id === roomId ? updatedRoom : room
  );
};

export const getRoom = (roomId: string): IRoom => {
  return store.rooms.find((room) => room.id === roomId);
};

export const updateRoomName = (roomID, newRoomName: string) => {
  store.rooms = store.rooms.map((room) =>
    room.id === roomID
      ? {
          ...room,
          name: newRoomName,
        }
      : room
  );
};

export const removeRoom = (roomId: string) => {
  store.rooms.filter((room) => room.id !== roomId);
};
// TODO: rewrite method
// export const excludeUser = (roomName: string, userId: string): IUser[] => {
//   const currentRoom = store.rooms.find((room) => room.name === roomName);
//
//   const updatedUsers = currentRoom.users.filter(
//     (user) => user.firstName !== userId
//   );
//
//   store.rooms = store.rooms.map((room) =>
//     room.name === roomName ? { ...room, users: updatedUsers } : room
//   );
//
//   return updatedUsers;
// };

export default store;
