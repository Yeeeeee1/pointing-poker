import { ChatAction, ChatActionType, IChatState } from "../../types/chat";

const initialState: IChatState = {
  isOpenChat: false,
  messages: [],
};

const chatReducer = (state = initialState, action: ChatAction): IChatState => {
  switch (action.type) {
    case ChatActionType.TOGGLE_CHAT_MODE:
      return { ...state, isOpenChat: !state.isOpenChat };
    case ChatActionType.SET_MESSAGES:
      return { ...state, messages: [...action.payload] };
    case ChatActionType.SET_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default chatReducer;
