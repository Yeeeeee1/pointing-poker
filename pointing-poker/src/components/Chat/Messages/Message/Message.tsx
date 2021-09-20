import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { IMessage } from "../../../../redux/types/chat";
import classes from "./message.module.scss";
import Member from "../../../Pages/LobbyPage/LobbyMembers/MembersList/Member/Member";
import { getUserState } from "../../../../redux/store/selectors";
import MemberCard from "../../../MemberCard/MemberCard";
import { IMessageProps } from "../../../../shared/interfaces/models";

const Message = ({
  message: { content, authorId },
}: IMessageProps): ReactElement => {
  const { users, currentUserId } = useSelector(getUserState);

  const foundUser = users.find((user) => user.id === authorId);

  return (
    <li className={classes.message}>
      <div className={classes.messageContent}>{content}</div>
      <div className={classes.messageAuthor}>
        {foundUser &&
          (currentUserId === authorId ? (
            <MemberCard member={foundUser} />
          ) : (
            <Member member={foundUser} />
          ))}
      </div>
    </li>
  );
};

export default Message;
