import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import lobbyReducer from "./lobbyReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  lobby: lobbyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
