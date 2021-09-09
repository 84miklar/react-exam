import React from "react"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import "./NavigationDesktop.css"
import logo from "../../../shared/img/chairLogo.png"
import { Button } from "../../button/Button"

export const NavigationDesktop = () => {
  const history = useHistory()

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
        <li
          className="nav__btn--about"
          onClick={() => history.push(RoutingPath.aboutView)}
        >
          <Button label="About" />
        </li>
        <li
          className="nav__btn--signin"
          onClick={() => history.push(RoutingPath.aboutView)}
        >
          <Button label="Sign In" />
        </li>
      </ul>
    </nav>
  )
}
