import React, { ReactElement, useState } from "react";
import { Form, Button, Col, Row, Alert } from "react-bootstrap";
import "./mainPage.scss";
import { useDispatch } from "react-redux";
import { History } from "history";
import MainPageLogo from "../../../shared/BaseComponents/MainPageLogo/MainPageLogo";
import AuthPopup from "../../Popup/AuthPopup/AuthPopup";
import toggleAuthMode from "../../../redux/store/action-creators/auth";
import {
  createRoomAndGetRoomID,
  joinToRoomAndGetRoomID,
} from "../../../redux/store/thunk-creators/lobby";

const MainPage = (): ReactElement => {
  const dispatch = useDispatch();
  const [alertMessage, updateAlertMessage] = useState<string | null>(null);
  const [Popup, updatePopup] = useState<null | ReactElement>(null);
  const [link, updateLink] = useState<string>("");

  const openPopup = (): void => {
    dispatch(toggleAuthMode());
  };

  const startNewGame = (): void => {
    const createRoom = (history: History) => {
      dispatch(createRoomAndGetRoomID(history));
    };

    updatePopup(<AuthPopup connect={createRoom} />);
    openPopup();
  };

  const linkToRoom = () => {
    if (!link.trim()) {
      updateAlertMessage("Enter the lobby URL!");

      setTimeout(() => {
        updateAlertMessage(null);
      }, 1500);

      return;
    }

    const connectToRoom = (history: History) => {
      dispatch(joinToRoomAndGetRoomID(link, history));
    };

    updatePopup(<AuthPopup connect={connectToRoom} />);
    openPopup();
  };

  return (
    <>
      {alertMessage && <Alert variant="danger">{alertMessage}</Alert>}
      {Popup}
      <div className="main-page">
        <MainPageLogo />
        <div className="main-page__section">
          <h2 className="main-page__title">Start your planning:</h2>
          <div className="main-page__controls-wrapper">
            <p>Create session: </p>
            <Button
              onClick={startNewGame}
              className="main-page__button"
              as="input"
              type="button"
              value="Start new game"
            />
          </div>
        </div>
        <div className="main-page__section">
          <h2 className="main-page__title">OR:</h2>
          <p>
            Connect to lobby by{" "}
            <strong className="main-page__text_bold">URL</strong>:
          </p>
          <div className="main-page__controls-wrapper">
            <Form>
              <Row>
                <Col xs="auto" className="my-1 main-page__col">
                  <Form.Control
                    onInput={({ target }) =>
                      updateLink((target as HTMLInputElement).value)
                    }
                    value={link}
                    placeholder="Write lobby URL"
                    className="me-sm-2 me-1 main-page__input"
                    id="inlineFormCustomSelect"
                  />
                </Col>
                <Col xs="auto" className="my-1 main-page__col">
                  <Button
                    onClick={linkToRoom}
                    className="main-page__button"
                    type="button"
                  >
                    Connect
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
