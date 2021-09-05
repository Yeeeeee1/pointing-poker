import React, { ReactElement } from "react";
import "./lobbyPage.scss";
import LobbyInfo from "./LobbyInfo/LobbyInfo";
import LobbyMembers from "./LobbyMembers/LobbyMembers";

const LobbyPage = (): ReactElement => (
  <section className="lobby">
    <LobbyInfo />
    <LobbyMembers />
  </section>
);

export default LobbyPage;
