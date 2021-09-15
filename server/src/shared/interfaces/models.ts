type UserAvatar = string | ArrayBuffer | null;

export enum ConnectResult {
  ERROR = "error",
  SUCCESS = "success",
}

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
  id: string;
  name: string;
  users: IUser[];
}

export interface IStore {
  rooms: IRoom[];
}
