import React, { ReactElement } from "react";
import "./lobbyPage.scss";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";
import LobbyIssues from "./LobbyIssues/LobbyIssues";

const LobbyPage = (): ReactElement => (
  <section className="lobby">
    <LobbyInfo />
    <LobbyMembers />
    <LobbyIssues />
  </section>
);

export default LobbyPage;
