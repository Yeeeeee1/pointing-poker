/* eslint-disable */ 
import React, { FC, ReactElement } from "react";
import IssuesList from "./IssuesList/IssuesList";

const GamePageIssues: FC = () => {
  const issues = [
    {
      id: "sad123sa",
      title: "trouble 1",
      description: "asdasd",
    },
    {
      id: "sad123sasda",
      title: "trouble 2",
      description: "asdasd",
    },
    {
      id: "sad123123sa",
      title: "trouble 3",
      description: "asdasd",
    },
  ];

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h3 className="lobby__title">Issues:</h3>
      <IssuesList issues={issues} />
    </div>
  );
};
export default GamePageIssues;