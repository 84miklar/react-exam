import "./NavigationDesktop.css";
import React from "react";
import { useHistory } from "react-router-dom";
import RoutingPath from "../../../routes/RoutingPath";
import logo from "../../../shared/img/chairLogo.png";
import { Button } from "../../button/Button";
import { ShowAuthenitcatedUser } from "../../../functions/ShowAuthenticatedUser";

export const NavigationDesktop = () => {
  const history = useHistory();

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
    </nav>
  );
};
