import React, { ReactElement } from "react";
import "./memberCard.scss";
import createDefaultCardImage from "../../shared/helperFunctions/createDefaultCardImage";

const MemberCard = (): ReactElement => {
  const name = "Alex Ggg";
  const position = "lead software engineer";

  return (
    <figure className="member-card">
      {true ? (
        <p className="member-card__image member-card__image_default">
          {createDefaultCardImage(name)}
        </p>
      ) : (
        <img className="member-card__image" src="" alt="" />
      )}
      <figcaption>
        <h6 className="member-card__title">{name}</h6>
        <p className="member-card__position">{position}</p>
      </figcaption>
    </figure>
  );
};

export default MemberCard;
