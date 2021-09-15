import "./NavigationDropdown.css"
import { useHistory } from "react-router"
import RoutingPath from "../../../routes/RoutingPath"
import { ShowAuthenitcatedUser } from "../../../functions/ShowAuthenticatedUser"
export const NavigationDropdown = () => {
  const history = useHistory()
  return (
    <div className="navigationDropdown__container">
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button onClick={() => history.push(RoutingPath.aboutView)}>About</button>
      <hr />
      {ShowAuthenitcatedUser()}
    </div>
  )
}
