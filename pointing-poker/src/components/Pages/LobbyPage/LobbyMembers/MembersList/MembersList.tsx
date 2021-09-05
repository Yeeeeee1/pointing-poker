import React, { ReactElement } from "react";
import "./membersList.scss";
import Member from "./Member/Member";

interface IMember {
  id: number;
  name: string;
  position?: string;
  logo?: string;
}

interface IMembersListProps {
  members: IMember[];
}

const MembersList = ({ members }: IMembersListProps): ReactElement => (
  <ul className="members-list">
    {members.map(({ name, position, logo, id }) => (
      <li key={id.toString()}>
        <Member name={name} position={position} logo={logo} />
      </li>
    ))}
  </ul>
);

export default MembersList;
