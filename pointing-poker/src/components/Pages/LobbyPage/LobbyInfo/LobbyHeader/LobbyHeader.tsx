import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import EditImage from "../../../../../assets/images/edit-icon.svg";
import "./lobbyHeader.scss";
import hidePartOfText from "../../../../../shared/helperFunctions/hidePartOfText";

import showSettingsAction from "../../../../../redux/store/action-creators/settings";

const LobbyHeader = (): ReactElement => {
  const [lobbyName, updateLobbyName] = useState("Spring 23");
  const [isEditLobbyName, toggleIsEditLobbyName] = useState(false);

  const dispatch = useDispatch();

  const handleInput = (inputElement: EventTarget): void => {
    updateLobbyName((inputElement as HTMLInputElement).value);
  };

  const showSettings = (): void => {
    dispatch(showSettingsAction());
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
        <h3 className="lobby__title">{hidePartOfText(lobbyName, 40)}</h3>
      )}
      <button
        className="lobby-header__button"
        type="button"
        onClick={() => toggleIsEditLobbyName(!isEditLobbyName)}
      >
        {isEditLobbyName ? <p>save</p> : <img src={EditImage} alt="pencil" />}
      </button>
      <button onClick={() => showSettings()} type="button">
        Settings
      </button>
    </div>
  );
};

export default LobbyHeader;
