import { User } from "./user";

export interface IMessage {
  id: string;
  content: string;
  author: User;
}

export interface IChatState {
  isOpenChat: boolean;
  messages: IMessage[];
}

export enum ChatActionType {
  TOGGLE_CHAT_MODE = "TOGGLE_CHAT_MODE",
  SET_MESSAGES = "SET_MESSAGES",
}

interface IChat {
  type: ChatActionType.TOGGLE_CHAT_MODE;
}

interface IChatMessages {
  type: ChatActionType.SET_MESSAGES;
  payload: IMessage[];
}

export type ChatAction = IChat | IChatMessages;

export interface ChatReducer {
  chat: IChatState;
}
