import React, { ReactElement, useRef } from "react";
import { Button } from "react-bootstrap";
import "./lobbyInfo.scss";
import { useSelector } from "react-redux";
import MemberCard from "../../../MemberCard/MemberCard";
import LobbyHeader from "./LobbyHeader/LobbyHeader";
import { getLobbyState, getUserState } from "../../../../redux/store/selectors";
import { Role } from "../../../../shared/globalVariables";

const LobbyInfo = (): ReactElement => {
  const { roomId } = useSelector(getLobbyState);
  const { users } = useSelector(getUserState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const admin = users.find((user) => user.role === Role.ADMIN);

  const copyURL = (): void => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
      inputRef.current.blur();
    }
  };

  return (
    <div>
      <LobbyHeader />
      <div>
        <h5 className="lobby-info__title">Scram master:</h5>
        TODO: refactor
        {admin && <MemberCard member={admin} />}
        <p className="lobby-info__title">Link to lobby:</p>
        <div className="lobby-info__copy-link">
          <input
            ref={inputRef}
            className="lobby-info__input"
            type="text"
            value={roomId}
          />
          <Button
            className="lobby-info__button"
            onClick={copyURL}
            variant="primary"
          >
            copy
          </Button>
        </div>
      </div>
      <div className="lobby-info__controls">
        <Button variant="primary">Start Game</Button>
        <Button variant="light">Cancel Game</Button>
      </div>
    </div>
  );
};

export default LobbyInfo;
