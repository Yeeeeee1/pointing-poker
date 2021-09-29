import React, { ReactElement } from "react";
import "./timer.scss";
import { ITimerCard } from "../../shared/interfaces/models";

const Timer = (timerInfo: ITimerCard): ReactElement => {
  const { timeType, value } = timerInfo;

  return (
    <div className="timer-card">
      <div>
        <h6 className="timer-card__title">{timeType}</h6>
        <p className="timer-card__position">{value}</p>
      </div>
    </div>
  );
};
export default Timer;
