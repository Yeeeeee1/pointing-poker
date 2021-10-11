import React, { ChangeEvent, ReactElement, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { History } from "history";
import classes from "./AuthPopup.module.scss";
import PopupOverlay from "../PopupOverlay";
import {
  AuthFormData,
  AuthFormErrors,
  UserAvatar,
} from "../../../shared/interfaces/models";
import {
  initAuthFormErrors,
  initFormValue,
} from "../../../shared/globalVariables";
import toggleAuthMode, {
  setFormData,
} from "../../../redux/store/action-creators/auth";
import { getAuthState } from "../../../redux/store/selectors";
import validateEnteredValue from "../../../shared/helperFunctions/validateEnteredValue";

export interface IAuthPopup {
  connect: (history: History) => void;
}
const AuthPopup = ({ connect }: IAuthPopup): ReactElement => {
  const history = useHistory<History>();
  const dispatch = useDispatch();
  const { isOpenAuthPopup } = useSelector(getAuthState);
  const [formFields, updateFormFields] = useState<AuthFormData>(initFormValue);
  const [isObserver, toggleIsObserver] = useState(false);
  const [userAvatar, updateUserAvatar] = useState<UserAvatar>(null);
  const [inputErrors, updateInputErrors] =
    useState<AuthFormErrors>(initAuthFormErrors);

  const checkIsValidForm = (): boolean =>
    !(
      formFields.firstName &&
      Object.values(inputErrors).every((input) => input === false)
    );

  const handleInputForm = ({ name, value }: HTMLInputElement): void => {
    const validationResult = validateEnteredValue(
      value,
      name === "firstName" && true
    );

    updateInputErrors((prevState) => ({
      ...prevState,
      [name]: !validationResult,
    }));

    updateFormFields((prevState) => ({
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

  const closePopup = (): void => {
    dispatch(toggleAuthMode());
  };

  const submitForm = (): void => {
    const formData = {
      ...formFields,
      userAvatar,
      isObserver,
    };

    dispatch(setFormData(formData));

    connect(history);

    // history.push("/lobby");
    closePopup();
  };

  return (
    <>
      {isOpenAuthPopup && (
        <PopupOverlay>
          <div className={classes.authPopup}>
            <h2 className={classes.authPopupTitle}>Connect to lobby</h2>
            <Form>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>* Your first name:</Form.Label>
                <Form.Control
                  className={
                    inputErrors.firstName && classes.authPopupInputNotValid
                  }
                  required
                  type="text"
                  name="firstName"
                  value={formFields.firstName}
                  onInput={({ target }) =>
                    handleInputForm(target as HTMLInputElement)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Your last name:</Form.Label>
                <Form.Control
                  className={
                    inputErrors.lastName && classes.authPopupInputNotValid
                  }
                  type="text"
                  name="lastName"
                  value={formFields.lastName}
                  onInput={({ target }) =>
                    handleInputForm(target as HTMLInputElement)
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="jobPosition">
                <Form.Label>Your job position:</Form.Label>
                <Form.Control
                  className={
                    inputErrors.jobPosition && classes.authPopupInputNotValid
                  }
                  type="text"
                  name="jobPosition"
                  value={formFields.jobPosition}
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
                <Button
                  disabled={checkIsValidForm()}
                  variant="primary"
                  onClick={submitForm}
                  type="button"
                >
                  Confirm
                </Button>
                <Button variant="light" type="button" onClick={closePopup}>
                  Cancel
                </Button>
              </Form.Group>
            </Form>
          </div>
        </PopupOverlay>
      )}
    </>
  );
};

export default AuthPopup;
