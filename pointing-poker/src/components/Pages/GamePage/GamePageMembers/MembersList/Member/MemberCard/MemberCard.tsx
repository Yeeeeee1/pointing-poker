/* eslint-disable */ 
import React, { ReactElement } from "react";
import "./memberCard.scss";
import createDefaultCardImage from "../../../../../../../shared/helperFunctions/createDefaultCardImage";
import { IMemberCard } from "../../../../../../../shared/interfaces/models";

const MemberCard = (cardInfo: IMemberCard): ReactElement => {
  const { name, position, logo } = cardInfo;

  return (
    <figure className="game-page__member-card">
      {!logo ? (
        <p className="game-page__member-card__image game-page__member-card__image_default">
          {createDefaultCardImage(name)}
        </p>
      ) : (
        <img className="game-page__member-card__image" src={logo} alt="" />
      )}
      <figcaption>
        <h6 className="game-page__member-card__title">{name}</h6>
        {position && <p className="game-page__member-card__position">{position}</p>}
      </figcaption>
    </figure>
  );
};
export default MemberCard;
