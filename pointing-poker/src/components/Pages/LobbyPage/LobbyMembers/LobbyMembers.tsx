import React, { ReactElement } from "react";
import MembersList from "./MembersList/MembersList";

const LobbyMembers = (): ReactElement => {
  const members = [
    { id: 12, name: "alex" },
    { id: 321, name: "john", position: "junior front-end" },
    { id: 122, name: "alex" },
    { id: 33121, name: "john" },
    { id: 12312, name: "alex" },
    { id: 31232121, name: "john", position: "middle back-end" },
    { id: 1123122, name: "alex" },
    { id: 3231231, name: "john", position: "senior full-stack" },
  ];

  return (
    <div>
      <h3 className="lobby__title">Members:</h3>
      <MembersList members={members} />
    </div>
  );
};
export default LobbyMembers;
