import { Dispatch } from "react";
import { AuthAction, AuthActionType } from "../../types/auth";

const toggleAuthMode = () => (dispatch: Dispatch<AuthAction>) => {
  dispatch({ type: AuthActionType.TOGGLE_AUTH_MODE });
};
export default toggleAuthMode;
