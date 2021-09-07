export interface IAuthState {
  isOpenAuthPopup: boolean;
}

export enum AuthActionType {
  TOGGLE_AUTH_MODE = "TOGGLE_AUTH_MODE",
}

interface IAuth {
  type: AuthActionType.TOGGLE_AUTH_MODE;
}

export type AuthAction = IAuth;

export interface AuthReducer {
  auth: IAuthState;
}
