import React, { ReactElement, useState } from "react";
import EditImage from "../../../../../assets/images/edit-icon.svg";
import "./lobbyHeader.scss";

const LobbyHeader = (): ReactElement => {
  const [lobbyName, updateLobbyName] = useState("Spring 23");
  const [isEditLobbyName, toggleIsEditLobbyName] = useState(false);

  const handleInput = (inputElement: EventTarget): void => {
    updateLobbyName((inputElement as HTMLInputElement).value);
  };

  return (
    <div className="lobby-header">
      {isEditLobbyName ? (
        <input
          type="text"
          value={lobbyName}
          onInput={({ target }) => handleInput(target)}
        />
      ) : (
        <h3 className="lobby__title">{lobbyName}</h3>
      )}
      <button
        className="lobby-header__button"
        type="button"
        onClick={() => toggleIsEditLobbyName(!isEditLobbyName)}
      >
        {isEditLobbyName ? <p>save</p> : <img src={EditImage} alt="pencil" />}
      </button>
    </div>
  );
};

export default LobbyHeader;
