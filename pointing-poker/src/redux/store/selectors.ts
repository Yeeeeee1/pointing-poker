import { AuthReducer } from "../types/auth";
import { UserReducer } from "../types/user";

export const getAuthState = (state: AuthReducer) => state.auth;
export const getUserState = (state: UserReducer) => state.user;
