import React, { useContext, useState } from "react"
import { useHistory, useLocation } from "react-router"
import "./SignInView.css"
import { UserContext, UserProvider } from "../../shared/provider/UserProvider"
import { Button } from "../../components/button/Button"
import LocalStorage from "../../shared/storage/LocalStorage"
import RoutingPath from "../../routes/RoutingPath"

export const SignInView = () => {
  const history = useHistory()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)

  const onSubmit = () => {
    if (!password) {
      alert("No password entered")
    } else {
      setAuthenticatedUser(username)
      localStorage.setItem(LocalStorage.username, username)

      history.push(RoutingPath.homeView)
    }
  }

  return (
    <div className="signin__container">
      <h1>Sign In</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <span className="submit__btn" onClick={() => onSubmit()}>
        {" "}
        <Button label="Submit" />
      </span>
    </div>
  )
}
