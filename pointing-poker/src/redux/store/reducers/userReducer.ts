import { IUserState, UserAction, UserActionType } from "../../types/user";

const initialState: IUserState = {
  currentUserId: null,
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UserActionType.SET_USERS:
      return { ...state, users: [...action.payload] };
    case UserActionType.SET_CURRENT_USER:
      return { ...state, currentUserId: action.payload };
    default:
      return state;
  }
};

export default userReducer;
