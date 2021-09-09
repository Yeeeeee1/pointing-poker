import { AuthReducer } from "../types/auth";

const getAuthState = (state: AuthReducer) => state.auth;

export default getAuthState;
