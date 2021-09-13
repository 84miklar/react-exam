import React, { useContext } from "react"
import { MovieCard } from "../../components/cards/MovieCard"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import "./MovieView.css"
import logo from "../../shared/img/chairLogo.png"
import { Button } from "../../components/button/Button"
import { useHistory } from "react-router"
import Config from "../../shared/api/config"
import Axios from "axios"
import { useState, useEffect } from "react/cjs/react.development"
import { YoutubeEmbed } from "../../components/youtubeembed/YoutubeEmbed"
import { Spinner } from "../../components/spinner/Spinner"
import RoutingPath from "../../routes/RoutingPath"
import { Card } from "../../components/cards/Card"
import LocalStorage from "../../shared/storage/LocalStorage"

export const MovieView = ({ location }) => {
  useEffect(() => {
    GetPlayableMovieFromData()
  }, [])
  const [data, setData] = useContext(DataContext)
  const [movieClip, setMovieClip] = useState()
  const history = useHistory()
  const chosenMovie = location.state

  const showMovieIfLoaded = () => {
    if (!movieClip) return <Spinner />
    if (!movieClip.data.results[0]) return <> </>
    return <YoutubeEmbed embedId={movieClip.data.results[0].key} />
  }

  const GetPlayableMovieFromData = () => {
    if (data) {
      Axios.get(
        `${Config.baseAPI_URL}/movie/${data.data.results[chosenMovie].id}/videos?${Config.API_Key}&language=en-US`
      )
        .then((response) => {
          setMovieClip(response)
          console.log(response)
        })

        .catch((error) => console.log(error))
    }
  }

  const showBackdrop = () => {
    if (data.data.results[chosenMovie].backdrop_path) {
      return (
        <img
          className="movie__backdrop"
          src={`${Config.movieImageURL}w500/${data.data.results[chosenMovie].backdrop_path}`}
          alt="backdrop"
        ></img>
      )
    } else {
      return (
        <div className="movie__backdrop">
          <img src={logo} alt="No movie poster"></img>
        </div>
      )
    }
  }

  const favourize = () => {
    const favouriteID = data.data.results[chosenMovie].id
    LocalStorage.favourites.push(favouriteID)
    localStorage.setItem("favourites", LocalStorage.favourites)
    localStorage[LocalStorage.favourites] = JSON.stringify(
      LocalStorage.favourites
    )
    console.log(LocalStorage.favourites)
  }

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h1 className="movie__title">
            {data.data.results[chosenMovie].original_title}
          </h1>
          <span className="backdrop">{showBackdrop()}</span>
          <div className="movie__data">
            <span className="movie__card">
              <MovieCard movie={chosenMovie} />
            </span>
            <span className="release__date">
              <p>
                Release date: <br />{" "}
                {data.data.results[chosenMovie].release_date}
              </p>
            </span>
            <span className="voting">
              <p>
                Avarage voting: {data.data.results[chosenMovie].vote_average}{" "}
                <span>&#40;</span>votes:{" "}
                {data.data.results[chosenMovie].vote_count}
                <span>&#41;</span>
              </p>
            </span>

            <span className="overview">
              <p>{data.data.results[chosenMovie].overview}</p>
            </span>
          </div>
          <span className="emebeded__movie">{showMovieIfLoaded()}</span>
        </div>
      )
    } else {
      history.push(RoutingPath.homeView)
    }
  }

  return (
    <div className="movieView__container">
      <Card>{displayData()}</Card>
      <span className="btn--favourite" onClick={() => favourize()}>
        <Button label="favourize" />
      </span>
      <span className="btn--search" onClick={() => history.goBack()}>
        <Button label="new search" />
      </span>
    </div>
  )
}
