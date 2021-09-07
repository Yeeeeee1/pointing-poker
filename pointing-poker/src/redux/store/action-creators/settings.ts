import { Dispatch } from "react";
import { IShowSettings, SettingsActionType } from "../../types/settings";

const showSettingsAction = () => (dispatch: Dispatch<IShowSettings>) => {
  dispatch({ type: SettingsActionType.SHOW_SETTINGS, payload: false });
};

export default showSettingsAction;
