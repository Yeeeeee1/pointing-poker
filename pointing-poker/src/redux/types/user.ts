import { UserAvatar } from "../../shared/interfaces/models";

export interface User {
  id: string;
  firstName: string;
  role: string;
  lastName?: string;
  jobPosition?: string;
  userAvatar?: UserAvatar;
  isObserver?: boolean;
}

export interface IUserState {
  users: User[];
  loading: boolean;
}

export enum UserActionType {
  SET_USERS = "SET_USERS",
  GET_USERS_SUCCESS = "GET_USERS_SUCCESS",
}

interface ISetUsers {
  type: UserActionType.SET_USERS;
  payload: User[];
}

interface IGetUsersSuccess {
  type: UserActionType.GET_USERS_SUCCESS;
  payload: boolean;
}

export type UserAction = ISetUsers | IGetUsersSuccess;

export interface UserReducer {
  user: IUserState;
}
