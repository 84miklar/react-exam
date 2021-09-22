import "./NavigationDropdown.css";
import { useState } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../../../routes/RoutingPath";
import { ShowAuthenitcatedUser } from "../../../functions/ShowAuthenticatedUser";
export const NavigationDropdown = () => {
  const history = useHistory();
  const [movieList, setMovieList] = useState(false);

  const toggleMovieLists = () => {
    if (movieList)
      return (
        <div>
          <button onClick={() => history.push(RoutingPath.topRatedView)}>
            Top rated
          </button>
          <button onClick={() => history.push(RoutingPath.upcomingView)}>
            Upcoming
          </button>
          <button onClick={() => history.push(RoutingPath.nowPlaying)}>
            Now Playing
          </button>
        </div>
      );
  };
  const openMovieList = () => {
    const movieList = document.querySelector(".dropdown__list");
    if (movieList.classList.contains("dropdown--closed")) {
      setMovieList(true);
      movieList.classList.remove("dropdown--closed");
    } else {
      setMovieList(false);
      movieList.classList.add("dropdown--closed");
    }
  };

  return (
    <div className="navigationDropdown__container">
      <button onClick={() => history.push(RoutingPath.homeView)}>Home</button>
      <button onClick={() => history.push(RoutingPath.aboutView)}>About</button>
      <button className="dropdown__list" onClick={() => openMovieList()}>
        Movies
      </button>
      {toggleMovieLists()}
      <hr />
      {ShowAuthenitcatedUser()}
    </div>
  );
};
