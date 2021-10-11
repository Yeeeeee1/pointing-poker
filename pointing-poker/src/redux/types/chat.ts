import { User } from "./user";

export interface IMessage {
  id: string;
  content: string;
  authorId: string;
}

export interface IMessageWithAuthor {
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
  SET_MESSAGE = "SET_MESSAGE",
}

interface IChat {
  type: ChatActionType.TOGGLE_CHAT_MODE;
}

interface IChatMessage {
  type: ChatActionType.SET_MESSAGE;
  payload: IMessage;
}

interface IChatMessages {
  type: ChatActionType.SET_MESSAGES;
  payload: IMessage[];
}

export type ChatAction = IChat | IChatMessage | IChatMessages;

export interface ChatReducer {
  chat: IChatState;
}
