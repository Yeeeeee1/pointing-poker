/* eslint-disable no-nested-ternary */
import React, { ReactElement, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import showSettingsAction from "../../../../redux/store/action-creators/settings";
import showSettingsState from "../../../../redux/store/selectors/settings.selector";
import "./settings.modal.scss";

const SettingsPopup = (): any => {
  const [isAlert, setIsAlert] = useState(false);
  const [saveTimer, setSaveTimer] = useState(10);
  const select = useSelector(showSettingsState);
  const dispatch = useDispatch();

  const saveSettings = () => {
    setIsAlert(true);
  };

  setInterval(() => {
    if (saveTimer === 0) {
      setSaveTimer(10);
      saveSettings();
    }
    // eslint-disable-next-line no-plusplus
    setSaveTimer(saveTimer - 1);
  }, 1000);
  console.log(select);
  return saveTimer === 0 ? (
    <Alert variant="success">Settings saved!</Alert>
  ) : null && select ? (
    <div>
      <Modal show={select} onHide={() => dispatch(showSettingsAction())}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
          <div>
            <p>Auto save: {saveTimer}</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="options-wrapper">
            <label htmlFor="isDiller">
              <input type="checkbox" name="is-diller" id="isDiller" />
              Does diller take part in a game?
            </label>
            <label htmlFor="votingSystem">
              <input type="checkbox" name="voting-system" id="votingSystem" />
              Voting System
            </label>
            <label htmlFor="admitRejectUsers">
              <input
                type="checkbox"
                name="admit-reject-users"
                id="admitRejectUsers"
              />
              Admit/reject users
            </label>
            <label htmlFor="changeChoose">
              <input type="checkbox" name="change-choose" id="changeChoose" />
              Change choose after vote
            </label>
            <label htmlFor="timer">
              <input type="checkbox" name="timer" id="timer" />
              Timer
            </label>
            <label htmlFor="tasks">
              <input type="checkbox" name="tasks" id="tasks" />
              Tasks
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => dispatch(showSettingsAction())}>Close</Button>
          <Button onClick={() => saveSettings()}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : null;
};

export default SettingsPopup;
