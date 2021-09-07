import React, { ReactElement } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "./mainPage.scss";
import { useDispatch } from "react-redux";
import MainPageLogo from "../../../shared/BaseComponents/MainPageLogo/MainPageLogo";
import AuthPopup from "../../Popup/AuthPopup/AuthPopup";
import toggleAuthMode from "../../../redux/store/action-creators/auth";

const MainPage = (): ReactElement => {
  const dispatch = useDispatch();

  const openPopup = (): void => {
    dispatch(toggleAuthMode());
  };

  return (
    <>
      <AuthPopup />
      <div className="main-page">
        <MainPageLogo />
        <div className="main-page__section">
          <h2 className="main-page__title">Start your planning:</h2>
          <div className="main-page__controls-wrapper">
            <p>Create session: </p>
            <Button
              onClick={() => openPopup()}
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
                    placeholder="Write lobby URL"
                    className="me-sm-2 me-1 main-page__input"
                    id="inlineFormCustomSelect"
                  />
                </Col>
                <Col xs="auto" className="my-1 main-page__col">
                  <Button className="main-page__button" type="button">
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
