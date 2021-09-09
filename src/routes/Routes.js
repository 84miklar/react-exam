import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import RoutingPath from "./RoutingPath"
import { AboutView } from "../views/aboutView/AboutView"
import { HomeView } from "../views/homeView/HomeView"
import { FourOFour } from "../views/404/FourOFour"
import { MovieView } from "../views/movieView/MovieView"

export const Routes = ({ children }) => {
  return (
    <BrowserRouter basename="/react-exam">
      {children}
      <Switch>
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route exact path={RoutingPath.movieView} component={MovieView} />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
//http://localhost:3002/
