export interface IUserState {
  users: string[];
  loading: boolean;
  cards: number[];
}

export enum UserActionType {
  GET_USERS = 'GET_USERS',
  GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
  GET_CARDS = 'GET_CARDS',
}

interface IGetUsers {
  type: UserActionType.GET_USERS,
  payload: string[];
}

interface IGetUsersSuccess {
  type: UserActionType.GET_USERS_SUCCESS,
  payload: boolean;
}

interface IGetCards {
  type: UserActionType.GET_CARDS,
  payload: number[];
}

export type UserAction = IGetUsers | IGetUsersSuccess | IGetCards;