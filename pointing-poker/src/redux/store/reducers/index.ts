import { combineReducers } from "redux";
import showSettingsReducer from "./settings.reducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  settings: showSettingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
