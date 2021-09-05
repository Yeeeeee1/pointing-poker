import React, { ReactElement, useRef } from "react";
import { Button } from "react-bootstrap";
import "./lobbyInfo.scss";
import MemberCard from "../../../MemberCard/MemberCard";
import LobbyHeader from "./LobbyHeader/LobbyHeader";

const LobbyInfo = (): ReactElement => {
  const inputRef = useRef<any>(null);
  const url = "https://smth-url/asd/asf/sf/asfasfasfasfasfasfasfasfasfas";

  const copyURL = (): void => {
    inputRef.current.select();
    document.execCommand("copy");
    inputRef.current.blur();
  };

  return (
    <div>
      <LobbyHeader />
      <div>
        <h5 className="lobby-info__title">Scram master:</h5>
        <MemberCard name="Alex" position="lead software engineer" />
        <p className="lobby-info__title">Link to lobby:</p>
        <div className="lobby-info__copy-link">
          <input
            ref={inputRef}
            className="lobby-info__input"
            type="text"
            value={url}
          />
          <Button
            className="lobby-info__button"
            onClick={() => copyURL()}
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
