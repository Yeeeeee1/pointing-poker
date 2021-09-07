export enum SettingsActionType {
  SHOW_SETTINGS = "SHOW_SETTINGS",
}

export interface IShowSettings {
  type: string;
  payload: boolean;
}

export default interface IShowSettingsState {
  isShow: boolean;
}
