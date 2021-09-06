import React, { ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../shared/BaseComponents/Logo/Logo";
import "./header.scss";

import ChatButton from "../../assets/images/chat-icon.svg";
import { RoutePath } from "../../shared/globalVariables";

const Header = (): ReactElement => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <NavLink
        to="/"
        exact
        className="header__logo"
        activeClassName="header__logo_active"
      >
        <Logo />
      </NavLink>
      {(pathname === RoutePath.GAME || pathname === RoutePath.LOBBY) && (
        <button className="header__chat-button" type="button">
          <img src={ChatButton} alt="chat button" />
        </button>
      )}
    </header>
  );
};

export default Header;
