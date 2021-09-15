import { Dispatch } from "react";
import { User, UserAction, UserActionType } from "../../types/user";

const setUser = (payload: User) => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.SET_USER, payload });
};

export const setUsers =
  (payload: User[]) => (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionType.SET_USERS, payload });
  };

export default setUser;
