import React, { ReactElement } from "react";
import "./timer.scss";
import createDefaultCardImage from "../../shared/helperFunctions/createDefaultCardImage";
import { IMemberCard } from "../../shared/interfaces/models";

const Timer = (cardInfo: IMemberCard): ReactElement => {
  const { name, position, logo } = cardInfo;

  return (
    <figure className="timer-card">
      <figcaption>
        <h6 className="timer-card__title">{name}</h6>
        {position && <p className="timer-card__position">{position}</p>}
      </figcaption>
    </figure>
  );
};
export default Timer;
