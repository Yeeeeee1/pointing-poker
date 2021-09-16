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
    messages: [],
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
  store.rooms = store.rooms.filter((room) => room.id !== roomId);
};

export const excludeUser = (roomId: string, userId: string): IUser[] => {
  const currentRoom = store.rooms.find((room) => room.id === roomId);

  const updatedUsers = currentRoom.users.filter((user) => user.id !== userId);

  store.rooms = store.rooms.map((room) =>
    room.id === roomId ? { ...room, users: updatedUsers } : room
  );

  return updatedUsers;
};

export const setMessage = (userId: string, roomId: string, message: string) => {
  const foundRoom = getRoom(roomId);

  const updatedRoom = {
    ...foundRoom,
    messages: [
      ...foundRoom.messages,
      { id: Date.now().toString(), content: message, authorId: userId },
    ],
  };

  store.rooms = store.rooms.map((room) =>
    room.id === roomId ? updatedRoom : room
  );
};

export default store;
