import React, { ReactElement } from "react";
import "./membersList.scss";
import Member from "./Member/Member";
import { IMembersListProps } from "../../../../../shared/interfaces/models";

const MembersList = ({ members }: IMembersListProps): ReactElement => (
  <ul className="members-list">
    {members.map((member) => (
      <li key={member.id}>
        <Member member={member} />
      </li>
    ))}
  </ul>
);

export default MembersList;
