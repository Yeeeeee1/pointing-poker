type UserAvatar = string | ArrayBuffer | null;

export interface IUser {
  id: string;
  firstName: string;
  lastName?: string;
  jobPosition?: string;
  userAvatar?: UserAvatar;
  isObserver?: boolean;
  role: string;
}

export interface IRoom {
  name: string;
  users: IUser[];
}

export interface IStore {
  rooms: IRoom[];
}
