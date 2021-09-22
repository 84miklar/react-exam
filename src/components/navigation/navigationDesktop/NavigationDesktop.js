import "./NavigationDesktop.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import logo from "../../../shared/img/chairLogo.png";
import { Button } from "../../button/Button";
import { NavigationDropdown } from "../NavigationDropdown/NavigationDropdown";
import { ShowAuthenitcatedUser } from "../../../functions/ShowAuthenticatedUser";

export const NavigationDesktop = () => {
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
      <ul className="nav__btns">
        <li
          className="nav__btn--home"
          onClick={() => history.push(RoutingPath.homeView)}
        >
          <Button label="Home" />
        </li>

        <li className="nav__btn--movies">
          <Button label="Movies" />
          <div className="movies--dropdown ">
            <button
              className="movies--btn_toprated"
              onClick={() => history.push(RoutingPath.topRatedView)}
            >
              Top Rated
            </button>
            <button
              className="movies--btn_upcoming"
              onClick={() => history.push(RoutingPath.upcomingView)}
            >
              Upcoming
            </button>
            <button
              className="movies--btn_nowplaying"
              onClick={() => history.push(RoutingPath.nowPlaying)}
            >
              Now playing
            </button>
          </div>
        </li>
        <li
          className="nav__btn--about"
          onClick={() => history.push(RoutingPath.aboutView)}
        >
          <Button label="About" />
        </li>
        {ShowAuthenitcatedUser()}
      </ul>
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
