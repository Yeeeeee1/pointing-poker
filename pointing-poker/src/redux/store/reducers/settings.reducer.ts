import { SettingsActionType } from "../../types/settings";

const initialState = {
  isShow: false,
};

const showSettingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SettingsActionType.SHOW_SETTINGS:
      return { ...state, isShow: !state.isShow };
    default:
      return state;
  }
};

export default showSettingsReducer;
