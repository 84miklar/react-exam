import { useState, useContext } from "react"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import {
  MovieDataContext,
  MovieDataProvider,
} from "../../shared/provider/MovieDataProvider"
import "./Card.css"
import logo from "../../shared/img/chairLogo.png"
import RoutingPath from "../../routes/RoutingPath"
import { useHistory } from "react-router"

export const CardOneMovie = () => {
  const [oneMovieData, setOneMovieData] = useContext(MovieDataContext)
  const history = useHistory()

  const showOnePoster = () => {
    if (oneMovieData.data.poster_path) {
      return (
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w300/${oneMovieData.data.poster_path}`}
          alt="movie poster"
          //   onClick={() => history.push(RoutingPath.movieView, props.movie)}
        ></img>
      )
    } else {
      return (
        <div className="alt__Img">
          <img src={logo} alt="No movie poster"></img>
        </div>
      )
    }
  }

  if (oneMovieData) {
    return (
      <div className="card">
        {showOnePoster()}
        <h3>{oneMovieData.data.original_title}</h3>
      </div>
    )
  }
}
