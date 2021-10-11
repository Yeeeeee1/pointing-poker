import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import lobbyReducer from "./lobbyReducer";
import chatReducer from "./chatReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  lobby: lobbyReducer,
  chat: chatReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
