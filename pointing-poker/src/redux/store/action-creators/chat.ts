import { Dispatch } from "react";
import {
  ChatAction,
  ChatActionType,
  IMessage,
  IMessageWithAuthor,
} from "../../types/chat";

const toggleChatMode = () => (dispatch: Dispatch<ChatAction>) => {
  dispatch({ type: ChatActionType.TOGGLE_CHAT_MODE });
};

export const setMessages =
  (payload: IMessage[]) => (dispatch: Dispatch<ChatAction>) => {
    dispatch({ type: ChatActionType.SET_MESSAGES, payload });
  };

export const setMessage =
  (payload: IMessage) => (dispatch: Dispatch<ChatAction>) => {
    dispatch({ type: ChatActionType.SET_MESSAGE, payload });
  };

export default toggleChatMode;
