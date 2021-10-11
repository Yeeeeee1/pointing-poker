import { UserInfo } from "../../shared/interfaces/models";

export interface IAuthState {
  isOpenAuthPopup: boolean;
  formData: UserInfo | null;
}

export enum AuthActionType {
  TOGGLE_AUTH_MODE = "TOGGLE_AUTH_MODE",
  SET_FORM_DATA = "SET_FORM_DATA",
}

interface IFormData {
  type: AuthActionType.SET_FORM_DATA;
  payload: UserInfo;
}

interface IAuth {
  type: AuthActionType.TOGGLE_AUTH_MODE;
}

export type AuthAction = IAuth | IFormData;

export interface AuthReducer {
  auth: IAuthState;
}
