import { Dispatch } from "react";
import { User, UserAction, UserActionType } from "../../types/user";

const setUsers = (payload: User[]) => (dispatch: Dispatch<UserAction>) => {
  dispatch({ type: UserActionType.SET_USERS, payload });
};
export default setUsers;
