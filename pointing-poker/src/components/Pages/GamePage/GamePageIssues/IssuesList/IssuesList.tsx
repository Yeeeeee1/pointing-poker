import React, { Fragment, ReactElement } from "react";
import "./issuesList.scss";
import Issue from "./Issue/Issue";
import { IIssuesListProps } from "../../../../../shared/interfaces/models";
import NewIssue from "./NewIssue/NewIssue";

const IssuesList = ({ issues }: IIssuesListProps): ReactElement => (
  <ul className="gp__issues-list">
    {issues.map((issue) => (
      <Fragment key={issue.id}>
        <Issue issue={issue} />
      </Fragment>
    ))}
    <NewIssue />
  </ul>
);

export default IssuesList;
