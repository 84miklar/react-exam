import "./MovieView.css";
import React, { useContext, useState, useEffect } from "react";
import { MovieCard } from "../../components/cards/MovieCard";
import { DataContext, DataProvider } from "../../shared/provider/DataProvider";
import { UserContext } from "../../shared/provider/UserProvider";
import logo from "../../shared/img/chairLogo.png";
import { Button } from "../../components/button/Button";
import { useHistory, useLocation } from "react-router";
import Config from "../../shared/api/service/config";
import { YoutubeEmbed } from "../../components/youtubeembed/YoutubeEmbed";
import { Spinner } from "../../components/spinner/Spinner";
import RoutingPath from "../../routes/RoutingPath";
import { Card } from "../../components/cards/Card";
import LocalStorage from "../../shared/storage/LocalStorage";
import MovieAPIService from "../../shared/api/service/MovieAPIService";

export const MovieView = () => {
  useEffect(() => {
    getPlayableMovieFromData();
  }, []);
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext);
  const [serverData, setServerData] = useContext(DataContext);
  const [movieClip, setMovieClip] = useState();
  const history = useHistory();
  const location = useLocation();
  const chosenMovie = location.state;

  const showMovieIfLoaded = () => {
    if (!movieClip) return <Spinner />;
    if (!movieClip.results[0]) return <> </>;
    return <YoutubeEmbed embedId={movieClip.results[0].key} />;
  };

  const getPlayableMovieFromData = async () => {
    try {
      const { data } = await MovieAPIService.getPlayableMovieFromData(
        serverData.results[chosenMovie].id
      );
      console.log(data);
      setMovieClip(data);
    } catch (error) {
      console.log(error);
    }
  };

  const showBackdrop = () => {
    if (serverData.results[chosenMovie].backdrop_path) {
      return (
        <img
          className="movie__backdrop"
          src={`${Config.movieImageURL}w500/${serverData.results[chosenMovie].backdrop_path}`}
          alt="movie backdrop"
        ></img>
      );
    } else {
      return (
        <div className="movie__backdrop">
          <img src={logo} alt="No movie poster"></img>
        </div>
      );
    }
  };

  const favourize = () => {
    const favouriteID = serverData.results[chosenMovie].id;
    LocalStorage.favourites.push(favouriteID);
    localStorage.setItem("favourites", LocalStorage.favourites + favouriteID);
    localStorage[LocalStorage.favourites] = JSON.stringify(
      LocalStorage.favourites
    );
    document.querySelector(".btn--favourite").style.backgroundColor = "#cfb584";
  };

  const displayData = () => {
    if (serverData) {
      return (
        <div>
          <h1 className="movie__title">
            {serverData.results[chosenMovie].original_title}
          </h1>
          <span className="backdrop">{showBackdrop()}</span>
          <div className="movie__data">
            <span className="movie__card">
              <MovieCard movie={chosenMovie} />
            </span>
            <span className="release__date">
              <p>
                Release date: <br />
                {serverData.results[chosenMovie].release_date}
              </p>
            </span>

            <span className="voting">
              <p>
                Avarage voting: {serverData.results[chosenMovie].vote_average}
                <span>&#40;</span>votes:
                {serverData.results[chosenMovie].vote_count}
                <span>&#41;</span>
              </p>
            </span>
            <span className="overview">
              <p>{serverData.results[chosenMovie].overview}</p>
            </span>
          </div>
          <span className="emebeded__movie">{showMovieIfLoaded()}</span>
        </div>
      );
    } else {
      history.push(RoutingPath.homeView);
    }
  };

  const showButtonIfAuthenticated = () => {
    return authenticatedUser ? (
      <span className="btn--favourite" onClick={() => favourize()}>
        <Button label="favourize" />
      </span>
    ) : (
      <div />
    );
  };

  return (
    <div className="movieView__container">
      <Card>{displayData()}</Card>
      <div className="btns">
        {showButtonIfAuthenticated()}
        <span
          className="btn--search"
          onClick={() => history.push(RoutingPath.homeView)}
        >
          <Button label="new search" />
        </span>
      </div>
    </div>
  );
};
