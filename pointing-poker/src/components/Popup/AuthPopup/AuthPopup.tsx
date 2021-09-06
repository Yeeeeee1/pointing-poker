import React, { ChangeEvent, ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "./AuthPopup.module.scss";
import PopupOverlay from "../PopupOverlay";
import { AuthFormData, UserAvatar } from "../../../shared/interfaces/models";
import { initFormValue } from "../../../shared/globalVariables";

const AuthPopup = (): ReactElement => {
  const [formData, updateFormData] = useState<AuthFormData>(initFormValue);
  const [isObserver, toggleIsObserver] = useState(false);
  const [userAvatar, updateUserAvatar] = useState<UserAvatar>(null);

  const handleInputForm = ({ name, value }: HTMLInputElement): void => {
    updateFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event: ChangeEvent): void => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;
    const reader = new FileReader();
    const file = target.files[0];

    if (file) {
      reader.onloadend = () => {
        updateUserAvatar(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      updateUserAvatar(null);
    }
  };

  return (
    <PopupOverlay>
      <div className={classes.authPopup}>
        <h2 className={classes.authPopupTitle}>Connect to lobby</h2>
        <Form>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>Your first name:</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onInput={({ target }) =>
                handleInputForm(target as HTMLInputElement)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Your last name:</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onInput={({ target }) =>
                handleInputForm(target as HTMLInputElement)
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="jobPosition">
            <Form.Label>Your job position:</Form.Label>
            <Form.Control
              type="text"
              name="jobPosition"
              value={formData.jobPosition}
              onInput={({ target }) =>
                handleInputForm(target as HTMLInputElement)
              }
            />
          </Form.Group>

          <Form.Group controlId="image" className="mb-3">
            <Form.Label>Image:</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) => handleImageChange(event)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="isObserver">
            <Form.Check
              type="checkbox"
              label="Connect as observer"
              onClick={() => toggleIsObserver(!isObserver)}
            />
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
};

export default AuthPopup;
