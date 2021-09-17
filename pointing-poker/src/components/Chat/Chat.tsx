import React, { FormEvent, ReactElement } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Messages from "./Messages/Messages";
import classes from "./chat.module.scss";
import toggleChatMode from "../../redux/store/action-creators/chat";
import useChat from "../../shared/hooks/useChat";

const Chat = (): ReactElement => {
  const dispatch = useDispatch();
  const { messageContent, sendMessage, handleTextarea } = useChat();

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
      <Form
        onSubmit={(event) => {
          sendMessage();
          event.preventDefault();
        }}
        className={classes.chatControls}
      >
        <Form.Control
          className={classes.chatInput}
          name="chat"
          id="chat"
          value={messageContent}
          onInput={(event) => handleTextarea(event)}
          placeholder="Type your message"
          as="textarea"
        />
        <Button type="submit" variant="primary">
          Send
        </Button>
      </Form>
    </div>
  );
};

export default Chat;
