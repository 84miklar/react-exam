import "./NavigationMobile.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import logo from "../../../shared/img/chairLogo.png";
import { NavigationDropdown } from "../NavigationDropdown/NavigationDropdown";
export const NavigationMobile = () => {
  const [navDropdown, setnavDropdown] = useState(false);

  const history = useHistory();

  const toggleDropdown = () => {
    if (navDropdown) return <NavigationDropdown />;
  };
  const toggleNavbar = function () {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger.classList.contains("hamburger--crossed")) {
      setnavDropdown(false);
      hamburger.classList.remove("hamburger--crossed");
    } else {
      setnavDropdown(true);
      hamburger.classList.add("hamburger--crossed");
    }
  };

  return (
    <nav className="navDesk__container">
      <img
        onClick={() => history.push(RoutingPath.homeView)}
        className="logo"
        src={logo}
        alt="logo"
      ></img>
      {toggleDropdown()}
      <div
        class="hamburger"
        onClick={() => {
          toggleNavbar();
        }}
      >
        <div class="hamburger__line hamburger__line1"></div>
        <div class="hamburger__line hamburger__line2"></div>
        <div class="hamburger__line hamburger__line3"></div>
      </div>
    </nav>
  );
};
