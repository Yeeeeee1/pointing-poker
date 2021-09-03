import { IUserState, UserAction, UserActionType } from "../../types/user"

const initialState: IUserState = {
  users: [],
  loading: false,
  cards: [],
}

export const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.GET_USERS:
      return {users: action.payload, loading: true, cards: []}
    case UserActionType.GET_USERS_SUCCESS:
      return {users: [], loading: action.payload, cards: []}
    case UserActionType.GET_CARDS:
      return {users: [], loading: true, cards: action.payload}
    default:
      return state;
  }
}