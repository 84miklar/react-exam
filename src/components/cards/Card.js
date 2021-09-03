import { useState, useContext } from "react"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import "./Card.css"
import logo from "../../shared/img/chairLogo.png"
import RoutingPath from "../../routes/RoutingPath"
import { useHistory } from "react-router"

export const Card = (props) => {
  const [data, setData] = useContext(DataContext)
  const history = useHistory()

  const showPoster = () => {
    if (data.data.results[props.movie].poster_path) {
      return (
        <img
          className="card"
          src={`https://image.tmdb.org/t/p/w300/${
            data.data.results[props.movie].poster_path
          }`}
          alt="movie poster"
          onClick={() => history.push(RoutingPath.movieView, props.movie)}
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

  if (data) {
    return (
      <div>
        {showPoster()}
        <h3>{data.data.results[props.movie].original_title}</h3>
      </div>
    )
  }
}
