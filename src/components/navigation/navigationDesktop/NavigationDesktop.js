import React from "react"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import "./NavigationDesktop.css"
import { Logo } from "../../../shared/img/Logo"

export const NavigationDesktop = () => {
  const history = useHistory()

  return (
    <nav className="navDesk__container">
      <span className="logo">
        <Logo />
      </span>
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
