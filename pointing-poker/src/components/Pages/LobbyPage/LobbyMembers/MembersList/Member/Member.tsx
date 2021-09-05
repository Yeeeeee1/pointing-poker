import React, { ReactElement } from "react";
import MemberCard, { IMemberCard } from "../../../../../MemberCard/MemberCard";
import "./member.scss";

const Member = ({ name, position, logo }: IMemberCard): ReactElement => (
  <div className="member">
    <MemberCard name={name} position={position} logo={logo} />
    <button className="member__button" type="button">
      delete
    </button>
  </div>
);

export default Member;
