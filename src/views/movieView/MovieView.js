import React, { useContext } from "react"
import { Card } from "../../components/cards/Card"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import "./MovieView.css"
import logo from "../../shared/img/chairLogo.png"

export const MovieView = ({ location }) => {
  const [data, setData] = useContext(DataContext)

  const chosenMovie = location.state
  console.log(data)
  console.log(chosenMovie)

  const showBackdrop = () => {
    if (data.data.results[chosenMovie].poster_path) {
      return (
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/w500/${data.data.results[chosenMovie].backdrop_path}`}
          alt="backdrop"
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

  const displayData = () => {
    return (
      <div className="movie__container">
        <h1 className="movie__title">
          {data.data.results[chosenMovie].original_title}
        </h1>
        <span className="movie__card">
          <Card movie={chosenMovie} />
        </span>
        <span className="release__date">
          <h3>Release date: {data.data.results[chosenMovie].release_date}</h3>
        </span>
        <span className="overview">
          <h3>{data.data.results[chosenMovie].overview}</h3>
        </span>
        <span className="voting">
          <h3>
            Avarage voting: {data.data.results[chosenMovie].vote_average}{" "}
            <span>&#40;</span>votes: {data.data.results[chosenMovie].vote_count}
            <span>&#41;</span>
          </h3>
        </span>
        {showBackdrop()}
      </div>
    )
  }
  return <div className="movieView__container">{displayData()}</div>
}
