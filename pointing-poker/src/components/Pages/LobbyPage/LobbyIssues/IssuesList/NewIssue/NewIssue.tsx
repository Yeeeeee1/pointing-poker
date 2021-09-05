import React, { ReactElement } from "react";

const NewIssue = (): ReactElement => (
  <li className="issue">
    <p className="issue__title">Create new issue</p>
    <button className="issue__button issue__button_new" type="button">
      +
    </button>
  </li>
);

export default NewIssue;
