import React, { ReactElement } from "react";
import DeleteSVG from "../../../../../../assets/images/delete-icon.png";
import EditSVG from "../../../../../../assets/images/edit-icon.svg";
import "./issue.scss";
import { IIssueProps } from "../../../../../../shared/interfaces/models";

const Issue = ({
  issue: { title, description },
}: IIssueProps): ReactElement => (
  <li className="issue">
    <div className="issue__content">
      <p className="issue__title">{title}</p>
      {description && <p className="issue__description">{description}</p>}
    </div>
    <div className="issue__controls">
      <button className="issue__button" type="button">
        <img className="issue__button_icon" src={EditSVG} alt="" />
      </button>
      <button className="issue__button" type="button">
        <img className="issue__button_icon" src={DeleteSVG} alt="" />
      </button>
    </div>
  </li>
);

export default Issue;
