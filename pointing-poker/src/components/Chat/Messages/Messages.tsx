import React, { Fragment, ReactElement } from "react";
import { useSelector } from "react-redux";
import Message from "./Message/Message";
import { getChatState } from "../../../redux/store/selectors";
import classes from "./messages.module.scss";

const Messages = (): ReactElement => {
  const { messages } = useSelector(getChatState);

  return (
    <ul className={classes.messages}>
      {messages.map((message) => (
        <Fragment key={message.id}>
          <Message message={message} />
        </Fragment>
      ))}
    </ul>
  );
};

export default Messages;
