import { Dispatch } from "react"
import { UserAction, UserActionType } from "../../types/user"

export const getUsers = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionType.GET_USERS, payload: ['q', 't']})
  }
}