import React, { ReactElement } from "react";
import "./memberCard.scss";
import createDefaultCardImage from "../../shared/helperFunctions/createDefaultCardImage";

export interface IMemberCard {
  name: string;
  position?: string;
  logo?: string;
}

const MemberCard = (cardInfo: IMemberCard): ReactElement => {
  const { name, position, logo } = cardInfo;

  return (
    <figure className="member-card">
      {!logo ? (
        <p className="member-card__image member-card__image_default">
          {createDefaultCardImage(name)}
        </p>
      ) : (
        <img className="member-card__image" src={logo} alt="" />
      )}
      <figcaption>
        <h6 className="member-card__title">{name}</h6>
        {position && <p className="member-card__position">{position}</p>}
      </figcaption>
    </figure>
  );
};
export default MemberCard;
