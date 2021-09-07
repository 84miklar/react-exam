import { useState, useContext } from "react"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import "./Card.css"
import logo from "../../shared/img/chairLogo.png"
import RoutingPath from "../../routes/RoutingPath"
import { useHistory } from "react-router"
import Config from "../../shared/api/config"

export const Card = (props) => {
  const [data, setData] = useContext(DataContext)
  const history = useHistory()

  const showPoster = () => {
    if (data.data.results[props.movie].poster_path) {
      return (
        <img
          className="poster"
          src={`${Config.movieImageURL}w200/${
            data.data.results[props.movie].poster_path
          }`}
          alt="movie poster"
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
      <div
        onClick={() => history.push(RoutingPath.movieView, props.movie)}
        className="card"
      >
        {showPoster()}
        <h3>{data.data.results[props.movie].original_title}</h3>
      </div>
    )
  }
}
