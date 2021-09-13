import { IStore } from "../shared/interfaces/models";

const store: IStore = {
  rooms: [],
};

export const updateRooms = (roomName, person) => {
  const currentRoom = store.rooms.find((room) => room.name === roomName);

  if (currentRoom) {
    const updatedRoom = {
      ...currentRoom,
      users: [...currentRoom.users, person],
    };

    store.rooms = store.rooms.map((room) =>
      room.name === roomName ? updatedRoom : room
    );
  } else {
    const newRoom = {
      name: roomName,
      users: [person],
    };

    store.rooms = [...store.rooms, newRoom];
  }
};

export default store;
