import React, { ReactElement } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import "./mainPage.scss";
import MainPageLogo from "../../shared/BaseComponents/MainPageLogo/MainPageLogo";

const MainPage = (): ReactElement => (
  <div className="mainPage">
    <MainPageLogo />
    <div className="mainPageSection">
      <h2 className="mainPageTitle">Start your planning:</h2>
      <div className="mainPageControlsWrapper">
        <p>Create session: </p>
        <Button
          className="mainPageButton"
          as="input"
          type="button"
          value="Start new game"
        />
      </div>
    </div>
    <div className="mainPageSection">
      <h2 className="mainPageTitle">OR:</h2>
      <p>
        Connect to lobby by <strong className="mainPageBoldText">URL</strong>:
      </p>
      <div className="mainPageControlsWrapper">
        <Form>
          <Row>
            <Col xs="auto" className="my-1 mainPageCol">
              <Form.Label
                className="me-sm-2"
                htmlFor="inlineFormCustomSelect"
                visuallyHidden
              >
                Preference
              </Form.Label>
              <Form.Control
                placeholder="Write lobby URL"
                className="me-sm-2 mainPageInput"
                id="inlineFormCustomSelect"
              />
            </Col>
            <Col xs="auto" className="my-1 mainPageCol">
              <Button className="mainPageButton" type="button">
                Connect
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  </div>
);

export default MainPage;
