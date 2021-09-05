import React, { ReactElement } from "react";
import MemberCard from "../../../MemberCard/MemberCard";
import "./lobbyInfo.scss";

const LobbyInfo = (): ReactElement => (
  <div>
    <h3 className="lobby__title">Spring 23</h3>
    <div>
      <h5 className="lobby-info__title">Scram master:</h5>
      <MemberCard />
      <p className="lobby-info__title">Link to lobby:</p>
      <div>
        <input type="text" value="https://link" />
        <input type="button" value="copy" />
      </div>
    </div>
    <div className="lobby-info__controls" />
  </div>
);

export default LobbyInfo;
