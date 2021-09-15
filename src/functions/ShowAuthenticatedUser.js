import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../shared/provider/UserProvider"
import RoutingPath from "../routes/RoutingPath"
import { Profile } from "../components/profile/Profile"
import { Button } from "../components/button/Button"

export const ShowAuthenitcatedUser = () => {
  const history = useHistory()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
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
