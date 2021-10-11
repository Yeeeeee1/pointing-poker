import React, { Fragment, ReactElement } from "react";
import "./issuesList.scss";
import Issue from "./Issue/Issue";
import NewIssue from "./NewIssue/NewIssue";
import { IIssuesListProps } from "../../../../../shared/interfaces/models";

const IssuesList = ({ issues }: IIssuesListProps): ReactElement => (
  <ul className="issues-list">
    {issues.map((issue) => (
      <Fragment key={issue.id}>
        <Issue issue={issue} />
      </Fragment>
    ))}
    <NewIssue />
  </ul>
);

export default IssuesList;
