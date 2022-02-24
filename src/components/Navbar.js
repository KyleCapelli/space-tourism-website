import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

const Navbar = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="navbar__line" />
      <div>
        <img
          className="navbar__hamburger"
          onClick={() => setToggleNavbar(true)}
          src={hamburger}
          alt="hamburger-icon"
        />
      </div>
      <div className={`navbar__contents ${toggleNavbar && "mobile-active"}`}>
        <div className="navbar__close-container">
          <img
            className="navbar__close"
            src={close}
            alt="close-icon"
            onClick={() => setToggleNavbar(false)}
          />
        </div>

        <div className="navbar__home">
          <a href="/">
            <span>00</span>HOME
          </a>
        </div>
        <div className="navbar__destination">
          <a href="/destination">
            <span>01</span>DESTINATION
          </a>
        </div>
        <div className="navbar__crew">
          <a href="/crew">
            <span>02</span>CREW
          </a>
        </div>
        <div className="navbar__technology">
          <a href="/technology">
            <span>03</span>TECHNOLOGY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
