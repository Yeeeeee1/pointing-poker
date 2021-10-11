import React, { ReactElement } from "react";
import "./memberCard.scss";
import createDefaultCardImage from "../../shared/helperFunctions/createDefaultCardImage";
import { IMemberCard } from "../../shared/interfaces/models";

const MemberCard = ({ member }: IMemberCard): ReactElement => {
  const { firstName, jobPosition, userAvatar } = member;

  return (
    <figure className="member-card">
      {!userAvatar ? (
        <p className="member-card__image member-card__image_default">
          {createDefaultCardImage(firstName)}
        </p>
      ) : (
        <img
          className="member-card__image"
          src={userAvatar.toString()}
          alt=""
        />
      )}
      <figcaption>
        <h6 className="member-card__title">{firstName}</h6>
        {jobPosition && <p className="member-card__position">{jobPosition}</p>}
      </figcaption>
    </figure>
  );
};
export default MemberCard;
