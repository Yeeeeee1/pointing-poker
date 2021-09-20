import { ThunkDispatch } from "redux-thunk";
import { ILobbyState, LobbyAction } from "../../types/lobby";
import { IMessage } from "../../types/chat";
import { setMessage } from "../action-creators/chat";

const setNewMessage =
  (message: IMessage) =>
  (dispatch: ThunkDispatch<ILobbyState, unknown, LobbyAction>) => {
    dispatch(setMessage(message));
  };

export default setNewMessage;
