import React, { ReactElement } from "react";
import MemberCard from "../../../../../MemberCard/MemberCard";
import "./member.scss";
import { IMemberCard } from "../../../../../../shared/interfaces/models";

const Member = ({ member }: IMemberCard): ReactElement => (
  <div className="member">
    <MemberCard member={member} />
    <button className="member__button" type="button">
      delete
    </button>
  </div>
);

export default Member;
