import React from "react"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../../routes/RoutingPath"
import "./NavigationDesktop.css"

export const NavigationDesktop = () => {
  const history = useHistory()

  return (
    <nav className="navDesk__container">
      <button onClick={() => history.push(RoutingPath.homeView)}> Home </button>
      <button onClick={() => history.push(RoutingPath.aboutView)}>About</button>
    </nav>
  )
}
