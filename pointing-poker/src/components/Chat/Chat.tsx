import React, { FormEvent, ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Messages from "./Messages/Messages";
import classes from "./chat.module.scss";
import { getLobbyState } from "../../redux/store/selectors";
import { socket, SocketEvent } from "../../shared/globalVariables";

const Chat = (): ReactElement => {
  const { roomId } = useSelector(getLobbyState);
  const [messageContent, updateMessageContent] = useState("");

  const handleTextarea = (event: FormEvent): void => {
    const target = event.target as HTMLInputElement;

    updateMessageContent(target.value);
  };

  const sendMessage = (): void => {
    socket.emit(SocketEvent.SEND_MESSAGE, roomId, messageContent); // TODO: move out
  };

  return (
    <div className={classes.chat}>
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
