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

export interface IMessage {
  id: string;
  authorId: string;
  content: string;
}

export interface IRoom {
  id: string;
  name: string;
  users: IUser[];
  messages: IMessage[];
}

export interface IStore {
  rooms: IRoom[];
}
