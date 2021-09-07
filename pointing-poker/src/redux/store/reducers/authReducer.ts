import { AuthAction, AuthActionType, IAuthState } from "../../types/auth";

const initialState: IAuthState = {
  isOpenAuthPopup: false,
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.TOGGLE_AUTH_MODE:
      return { ...state, isOpenAuthPopup: !state.isOpenAuthPopup };
    default:
      return state;
  }
};

export default authReducer;
