import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { socket, SocketEvent } from "../globalVariables";
import { getLobbyState } from "../../redux/store/selectors";

const useChat = () => {
  const { roomId } = useSelector(getLobbyState);
  const [messageContent, updateMessageContent] = useState("");

  const handleTextarea = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;

    updateMessageContent(target.value);
  };

  const sendMessage = (): void => {
    socket.emit(SocketEvent.MESSAGE_SEND, roomId, messageContent);

    updateMessageContent("");
  };

  return { messageContent, sendMessage, handleTextarea };
};

export default useChat;
