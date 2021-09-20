import { AuthReducer } from "../types/auth";
import { UserReducer } from "../types/user";
import { LobbyReducer } from "../types/lobby";
import { ChatReducer } from "../types/chat";

export const getAuthState = (state: AuthReducer) => state.auth;
export const getUserState = (state: UserReducer) => state.user;
export const getLobbyState = (state: LobbyReducer) => state.lobby;
export const getChatState = (state: ChatReducer) => state.chat;
