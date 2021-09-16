import React, { ReactElement } from "react";
import { IMessage } from "../../../redux/types/chat";
import classes from "./message.module.scss";
import Member from "../../Pages/LobbyPage/LobbyMembers/MembersList/Member/Member";

interface IMessageProps {
  message: IMessage;
}

const Message = ({
  message: { content, author },
}: IMessageProps): ReactElement => (
  <li className={classes.message}>
    <div className={classes.messageContent}>{content}</div>
    <div className={classes.messageAuthor}>
      <Member member={author} />
    </div>
  </li>
);

export default Message;
