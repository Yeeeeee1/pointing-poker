import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { IMessage } from "../../../redux/types/chat";
import classes from "./message.module.scss";
import Member from "../../Pages/LobbyPage/LobbyMembers/MembersList/Member/Member";
import { getUserState } from "../../../redux/store/selectors";

interface IMessageProps {
  message: IMessage;
}

const Message = ({
  message: { content, authorId },
}: IMessageProps): ReactElement => {
  const { users } = useSelector(getUserState);
  const foundUser = users.find((user) => user.id === authorId);

  console.log("users", users);
  console.log("authorId", authorId);
  console.log("foundUser", foundUser);
  return (
    <li className={classes.message}>
      <div className={classes.messageContent}>{content}</div>
      <div className={classes.messageAuthor}>
        {foundUser && <Member member={foundUser} /> /* TODO: rewrite */}
      </div>
    </li>
  );
};

export default Message;
