import React, { useContext, useState } from "react"
import "./NavigationDesktop.css"
import { useHistory } from "react-router-dom"
import { UserContext } from "../../../shared/provider/UserProvider"
import RoutingPath from "../../../routes/RoutingPath"
import logo from "../../../shared/img/chairLogo.png"
import { Button } from "../../button/Button"
import { Profile } from "../../profile/Profile"
import { NavigationDropdown } from "../NavigationDropdown/NavigationDropdown"

export const NavigationDesktop = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const [navDropdown, setnavDropdown] = useState(false)
  const history = useHistory()

  const showAuthenitcatedUser = () => {
    if (authenticatedUser) {
      return <Profile />
    } else {
      return (
        <li
          className="nav__btn--signin"
          onClick={() => history.push(RoutingPath.signinView)}
        >
          <Button label="Sign In" />
        </li>
      )
    }
  }

  const toggleNavbar = function () {
    const hamburger = document.querySelector(".hamburger")
    if (navDropdown) {
      hamburger.classList.add("hamburger--crossed")
      return <NavigationDropdown />
    } else hamburger.classList.remove("hamburger--crossed")
  }

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
        {showAuthenitcatedUser()}
      </ul>
      <div class="hamburger" onClick={() => setnavDropdown(!navDropdown)}>
        {toggleNavbar()}
        <div class="hamburger__line hamburger__line1"></div>
        <div class="hamburger__line hamburger__line2"></div>
        <div class="hamburger__line hamburger__line3"></div>
      </div>
    </nav>
  )
}
