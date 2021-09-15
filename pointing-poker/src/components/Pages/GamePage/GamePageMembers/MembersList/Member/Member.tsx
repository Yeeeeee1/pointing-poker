import React, { ReactElement } from "react";
import MemberCard from "./MemberCard/MemberCard";
import "./member.scss";
import { IMemberCard } from "../../../../../../shared/interfaces/models";

const Member = ({ name, position, logo }: IMemberCard): ReactElement => (
  <div className="game-page__member">
    <MemberCard name={name} position={position} logo={logo} />
    <button className="game-page__member__button" type="button">
      delete
    </button>
  </div>
);

export default Member;
