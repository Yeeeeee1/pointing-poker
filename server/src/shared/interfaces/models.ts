type UserAvatar = string | ArrayBuffer | null;

export interface IUser {
  firstName: string;
  lastName: string;
  jobPosition: string;
  userAvatar: UserAvatar;
  isObserver: boolean;
}

export interface IRoom {
  name: string;
  users: IUser[];
}

export interface IStore {
  rooms: IRoom[];
}
