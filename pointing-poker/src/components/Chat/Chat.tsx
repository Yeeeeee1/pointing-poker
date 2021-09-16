import React, { ReactElement } from "react";
import { Button, Form } from "react-bootstrap";
import Messages from "./Messages/Messages";
import classes from "./chat.module.scss";

const Chat = (): ReactElement => (
  <div className={classes.chat}>
    <Messages />
    <div className={classes.chatControls}>
      <Form.Control
        className={classes.chatInput}
        name="chat"
        id="chat"
        placeholder="Type your message"
        as="textarea"
        rows={3}
      />
      <Button variant="primary">Send</Button>
    </div>
  </div>
);

export default Chat;
