import React, { ReactElement } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import showSettingsAction from "../../../../redux/store/action-creators/settings";
import showSettingsState from "../../../../redux/store/selectors/settings.selector";

const SettingsPopup = (): any => {
  const select = useSelector(showSettingsState);
  const dispatch = useDispatch();

  const saveSettings = () => {
    dispatch(showSettingsAction());
  };
  console.log(select);
  return select ? (
    <div>
      <Modal show={select}>
        <Modal.Header
          closeButton
          onClick={() => dispatch(showSettingsAction())}
        >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you&apos;re reading this text in a modal!
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
