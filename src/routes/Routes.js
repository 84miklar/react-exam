import React, { useContext, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RoutingPath from "./RoutingPath";
import LocalStorage from "../shared/storage/LocalStorage";
import { AboutView } from "../views/aboutView/AboutView";
import { HomeView } from "../views/homeView/HomeView";
import { FourOFour } from "../views/404/FourOFour";
import { MovieView } from "../views/movieView/MovieView";
import { SignInView } from "../views/signin/SignInView";
import { FavouritesView } from "../views/favouritesView/FavouritesView";
import { UserContext } from "../shared/provider/UserProvider";
import { UpcomingView } from "../views/upcomingView/UpcomingView";
import { HighestRankView } from "../views/highestRankView/HighestRankView";
import { NowPlayingView } from "../views/nowplayingView/NowPlayingView";

export const Routes = ({ children }) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);

  const checkUserAuthentification = () => {
    const userFromMemory = localStorage.getItem(LocalStorage.username);
    setAuthenticatedUser(userFromMemory);
  };
  useEffect(() => {
    checkUserAuthentification();
  }, []);

  const blockIfAuthentificatedUser = (view) => {
    return authenticatedUser ? HomeView : view;
  };
  const blockIfNotAuthentificatedUser = (view) => {
    return !authenticatedUser ? HomeView : view;
  };

  return (
    <BrowserRouter basename="/react-exam">
      {children}
      <Switch>
        <Route exact path={RoutingPath.aboutView} component={AboutView} />
        <Route
          exact
          path={RoutingPath.signinView}
          component={blockIfAuthentificatedUser(SignInView)}
        />
        <Route
          exact
          path={RoutingPath.favouritesView}
          component={blockIfNotAuthentificatedUser(FavouritesView)}
        />
        <Route exact path={RoutingPath.movieView} component={MovieView} />
        <Route exact path={RoutingPath.upcomingView} component={UpcomingView} />
        <Route exact path={RoutingPath.nowPlaying} component={NowPlayingView} />
        <Route
          exact
          path={RoutingPath.topRatedView}
          component={HighestRankView}
        />
        <Route exact path={RoutingPath.homeView} component={HomeView} />
        <Route path="*">
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
