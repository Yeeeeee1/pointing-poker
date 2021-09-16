import { ThunkDispatch } from "redux-thunk";
import { socket, SocketEvent } from "../../../shared/globalVariables";
import { ChatAction, IChatState } from "../../types/chat";

const sendMessage =
  (roomId: string, message: string) =>
  (dispatch: ThunkDispatch<IChatState, unknown, ChatAction>) => {};

export default sendMessage;
