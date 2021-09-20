import React, { useContext } from "react"
import "./ProfileDropdown.css"
import { useHistory } from "react-router"
import RoutingPath from "../../../routes/RoutingPath"
import LocalStorage from "../../../shared/storage/LocalStorage"

import { UserContext } from "../../../shared/provider/UserProvider"

export const ProfileDropdown = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const history = useHistory()

  const onLogout = () => {
    localStorage.removeItem(LocalStorage.username)
    setAuthenticatedUser(null)
    history.push(RoutingPath.homeView)
  }
  return (
    <div className="dropdown__container">
      <button
        className="btn--favourites"
        onClick={() => history.push(RoutingPath.favouritesView)}
      >
        Favourites
      </button>
      <hr />
      <button
        onClick={() => {
          onLogout()
        }}
      >
        Log out
      </button>
    </div>
  )
}
