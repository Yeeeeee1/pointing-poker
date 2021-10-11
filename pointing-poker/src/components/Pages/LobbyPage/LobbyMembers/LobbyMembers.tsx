import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import MembersList from "./MembersList/MembersList";
import { getUserState } from "../../../../redux/store/selectors";
import { Role } from "../../../../shared/globalVariables";

const LobbyMembers = (): ReactElement => {
  const { users } = useSelector(getUserState);
  const members = users.filter((user) => user.role === Role.PARTICIPANT);

  return (
    <div>
      <h3 className="lobby__title">Members:</h3>
      <MembersList members={members} />
    </div>
  );
};
export default LobbyMembers;
