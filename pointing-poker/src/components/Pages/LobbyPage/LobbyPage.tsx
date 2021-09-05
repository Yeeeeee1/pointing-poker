import React, { ReactElement } from "react";
import "./lobbyPage.scss";
import LobbyInfo from "./LobbyInfo/LobbyInfo";

const LobbyPage = (): ReactElement => (
  <section>
    <LobbyInfo />
  </section>
);

export default LobbyPage;
