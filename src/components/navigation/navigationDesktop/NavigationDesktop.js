import React from "react"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import "./NavigationDesktop.css"
import logo from "../../../shared/img/chairLogo.png"

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

      <button
        className="btn--home"
        onClick={() => history.push(RoutingPath.homeView)}
      >
        {" "}
        Home{" "}
      </button>
      <button
        className="btn--about"
        onClick={() => history.push(RoutingPath.aboutView)}
      >
        About
      </button>
    </nav>
  )
}
