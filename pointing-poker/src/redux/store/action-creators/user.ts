import { Dispatch } from "react";
import { UserAction } from "../../types/user";

const getUsers = () => (dispatch: Dispatch<UserAction>) => {
  // TODO example for dispatch ( dispatch({type: UserActionType.GET_USERS, payload: ['q', 't']}) )
};

export default getUsers;
