import { AuthAction, AuthActionType, IAuthState } from "../../types/auth";

const initialState: IAuthState = {
  isOpenAuthPopup: false,
  formData: null,
};

const authReducer = (state = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case AuthActionType.TOGGLE_AUTH_MODE:
      return { ...state, isOpenAuthPopup: !state.isOpenAuthPopup };
    case AuthActionType.SET_FORM_DATA:
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

export default authReducer;
