import React, { FC, ReactElement } from "react";
import MembersList from "./MembersList/MembersList";

const GamePageMembers: FC = () => {
  const members = [
    { id: 12, name: "alex" },
    { id: 321, name: "john", position: "junior front-end" },
    { id: 122, name: "alex asdas" },
    { id: 33121, name: "john" },
    { id: 12312, name: "alex" },
    { id: 31232121, name: "john", position: "middle back-end" },
    { id: 1123122, name: "alex" },
    { id: 3231231, name: "john", position: "senior full-stack" },
  ];

  return (
    <div>
      <MembersList members={members} />
    </div>
  );
};
export default GamePageMembers;
