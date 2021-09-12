type UserAvatar = string | ArrayBuffer | null;

export interface IUser {
  firstName: string;
  lastName: string;
  jobPosition: string;
  userAvatar: UserAvatar;
  isObserver: boolean;
}

export interface IStore {
  users: IUser[];
}
