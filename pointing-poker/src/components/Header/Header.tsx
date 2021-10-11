import React, { ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import ChatButton from "../../assets/images/chat-icon.svg";
import { RoutePath } from "../../shared/globalVariables";
import toggleChatMode from "../../redux/store/action-creators/chat";
import "./header.scss";
import Logo from "../../shared/BaseComponents/Logo/Logo";

const Header = (): ReactElement => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const toggleChat = () => {
    dispatch(toggleChatMode());
  };

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
        <button
          onClick={toggleChat}
          className="header__chat-button"
          type="button"
        >
          <img src={ChatButton} alt="chat button" />
        </button>
      )}
    </header>
  );
};

export default Header;
