import React, { ReactElement } from "react";
import RssLogo from "../../assets/images/rss_logo.svg";
import "./footer.scss";

const Footer = (): ReactElement => (
  <footer className="footer">
    <ul className="footer__author-links">
      <li>
        <a
          className="footer__author-link"
          target="_blank"
          href="https://github.com/youjob13"
          rel="noreferrer"
        >
          youjob13
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="footer__author-link"
          href="https://github.com/akurlovich"
          rel="noreferrer"
        >
          akurlovich
        </a>
      </li>
      <li>
        <a
          target="_blank"
          className="footer__author-link"
          href="https://github.com/Yeeeeee1"
          rel="noreferrer"
        >
          Yeeeeee1
        </a>
      </li>
    </ul>
    <p className="footer__year">2021</p>
    <a target="_blank" href="https://rs.school/react/" rel="noreferrer">
      <img
        className="footer__logo"
        src={RssLogo}
        alt="The Rolling Scopes School"
      />
    </a>
  </footer>
);

export default Footer;
