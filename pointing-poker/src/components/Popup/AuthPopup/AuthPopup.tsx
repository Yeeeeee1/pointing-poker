import React, { ReactElement } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./AuthPopup.module.scss";
import PopupOverlay from "../PopupOverlay";

const AuthPopup = (): ReactElement => (
  <PopupOverlay>
    <div className={classes.authPopup}>
      <h2 className={classes.authPopupTitle}>Connect to lobby</h2>
      <Form>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>Your first name:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Your last name:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="jobPosition">
          <Form.Label>Your job position:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group controlId="image" className="mb-3">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="isObserver">
          <Form.Text>Connect as observer</Form.Text>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Form.Group className={classes.authPopupButtons}>
          <Button variant="primary" type="submit">
            Confirm
          </Button>
          <Button variant="light" type="button">
            Cancel
          </Button>
        </Form.Group>
      </Form>
    </div>
  </PopupOverlay>
);

export default AuthPopup;
