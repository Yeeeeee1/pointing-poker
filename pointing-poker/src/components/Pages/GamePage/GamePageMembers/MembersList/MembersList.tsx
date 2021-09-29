import React, { ReactElement } from "react";
import "./membersList.scss";
import Member from "./Member/Member";
import { IMembersListProps } from "../../../../../shared/interfaces/models";

const MembersList = ({ members }: IMembersListProps): ReactElement => (
  <ul className="gp__members-list">
    {members.map(({ name, position, logo, id }) => (
      <li key={id.toString()}>
        <Member name={name} position={position} logo={logo} />
      </li>
    ))}
  </ul>
);

export default MembersList;
