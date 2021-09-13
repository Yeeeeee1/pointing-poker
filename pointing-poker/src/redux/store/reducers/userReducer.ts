import { IUserState, UserAction, UserActionType } from "../../types/user";

const initialState: IUserState = {
  users: [],
  loading: false,
};

const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionType.SET_USERS:
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
};

export default userReducer;
