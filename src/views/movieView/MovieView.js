import React, { useContext } from "react"
import { Card } from "../../components/cards/Card"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import "./MovieView.css"
import logo from "../../shared/img/chairLogo.png"
import { Button } from "../../components/button/Button"
import { useHistory } from "react-router"
import RoutingPath from "../../routes/RoutingPath"

export const MovieView = ({ location }) => {
  const [data, setData] = useContext(DataContext)
  const history = useHistory()

  const chosenMovie = location.state
  console.log(data)
  console.log(chosenMovie)

  const showBackdrop = () => {
    if (data.data.results[chosenMovie].backdrop_path) {
      return (
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/w500/${data.data.results[chosenMovie].backdrop_path}`}
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

  const displayData = () => {
    return (
      <div className="movie__container">
        <h1 className="movie__title">
          {data.data.results[chosenMovie].original_title}
        </h1>
        <span className="backdrop">{showBackdrop()}</span>
        <div className="movie__data">
          <span className="movie__card">
            <Card movie={chosenMovie} />
          </span>
          <span className="release__date">
            <p>
              Release date: <br /> {data.data.results[chosenMovie].release_date}
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
      </div>
    )
  }
  return (
    <div className="movieView__container">
      {displayData()}
      <span className="btn--search" onClick={() => history.goBack()}>
        <Button label="new search" />
      </span>
    </div>
  )
}
