import React, { useContext } from "react"
import "./Profile.css"
import { UserContext } from "../../shared/provider/UserProvider"
import { ProfileDropdown } from "./profiledropdown/ProfileDropdown"

export const Profile = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  return (
    <div className="profile">
      <img
        className="profile__img"
        src="https://thispersondoesnotexist.com/image"
        alt="profile face"
      />
      <h3 className="profile__username">{authenticatedUser}</h3>
      <ProfileDropdown />
    </div>
  )
}
