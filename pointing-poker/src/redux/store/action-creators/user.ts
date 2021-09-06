import { Dispatch } from "react";
import { UserAction, UserActionType } from "../../types/user";

export const getUsers = () => (dispatch: Dispatch<UserAction>) => {
  // TODO example for dispatch ( dispatch({type: UserActionType.GET_USERS, payload: ['q', 't']}) )
};
