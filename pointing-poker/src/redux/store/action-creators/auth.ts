import { Dispatch } from "react";
import { AuthAction, AuthActionType } from "../../types/auth";
import { UserInfo } from "../../../shared/interfaces/models";

const toggleAuthMode = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActionType.TOGGLE_AUTH_MODE });
};

export const setFormData =
  (payload: UserInfo) => (dispatch: Dispatch<AuthAction>) => {
    dispatch({ type: AuthActionType.SET_FORM_DATA, payload });
  };

export default toggleAuthMode;
