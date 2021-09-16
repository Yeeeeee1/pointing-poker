import React, { FormEvent, ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Messages from "./Messages/Messages";
import classes from "./chat.module.scss";
import { getLobbyState } from "../../redux/store/selectors";
import { socket, SocketEvent } from "../../shared/globalVariables";
import toggleChatMode from "../../redux/store/action-creators/chat";

const Chat = (): ReactElement => {
  const dispatch = useDispatch();
  const { roomId } = useSelector(getLobbyState);
  const [messageContent, updateMessageContent] = useState("");

  const handleTextarea = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;

    updateMessageContent(target.value);
  };

  const sendMessage = (): void => {
    socket.emit(SocketEvent.SEND_MESSAGE, roomId, messageContent); // TODO: move out
    updateMessageContent("");
  };

  const closeChat = (event: FormEvent) => {
    event.preventDefault();
    dispatch(toggleChatMode());
  };

  return (
    <div className={classes.chat}>
      <a
        aria-label="close chat"
        href="/"
        className={classes.chatClose}
        onClick={(event) => closeChat(event)}
      />
      <Messages />
      <div className={classes.chatControls}>
        <Form.Control
          className={classes.chatInput}
          name="chat"
          id="chat"
          value={messageContent}
          onInput={(event) => handleTextarea(event)}
          placeholder="Type your message"
          as="textarea"
          rows={3}
        />
        <Button onClick={sendMessage} variant="primary">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
