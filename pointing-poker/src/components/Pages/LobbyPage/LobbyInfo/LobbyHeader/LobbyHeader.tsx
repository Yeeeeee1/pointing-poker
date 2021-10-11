import React, { ReactElement, useEffect, useState } from "react";
import "./lobbyHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import hidePartOfText from "../../../../../shared/helperFunctions/hidePartOfText";
import { socket, SocketEvent } from "../../../../../shared/globalVariables";
import { getLobbyState } from "../../../../../redux/store/selectors";
import { updateRoomName } from "../../../../../redux/store/action-creators/lobby";
import EditImage from "../../../../../assets/images/edit-icon.svg";

const LobbyHeader = (): ReactElement => {
  const dispatch = useDispatch();
  const { roomName, roomId } = useSelector(getLobbyState);
  const [isEditLobbyName, toggleIsEditLobbyName] = useState(false);

  useEffect(() => {
    socket.emit(SocketEvent.ROOM_UPDATE_NAME, roomId, roomName);
  }, [roomName]);

  const handleInput = (inputElement: EventTarget): void => {
    dispatch(updateRoomName((inputElement as HTMLInputElement).value));
  };

  return (
    <div className="lobby-header">
      {isEditLobbyName ? (
        <input
          type="text"
          value={roomName}
          onInput={({ target }) => handleInput(target)}
        />
      ) : (
        <h3 className="lobby__title">{hidePartOfText(roomName, 40)}</h3>
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
