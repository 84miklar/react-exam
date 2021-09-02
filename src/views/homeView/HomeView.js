import React, { useState, useContext } from "react"
import { useHistory } from "react-router"
import Axios from "axios"
import Config from "../../shared/api/config"
import "./HomeView.css"
import { Card } from "../../components/cards/Card"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import { MovieView } from "../movieView/MovieView"
import RoutingPath from "../../routes/RoutingPath"

export const HomeView = () => {
  const [data, setData] = useContext(DataContext)
  const [search, setSearch] = useState()
  const history = useHistory()

  const fetchDataFromExternalAPI = () => {
    if (search) {
      Axios.get(
        `${Config.baseAPI_URL}search/movie?${Config.API_Key}&language=en-US&query=${search}&page=1`
      )
        .then((response) => {
          setData(response)
        })

        .catch((error) => console.log(error))
    }
  }

  const displayData = () => {
    if (data) {
      return (
        <div className="card__container">
          <Card movie={0} />
          <Card movie={1} />
          <Card movie={2} />
          <Card movie={3} />
          <Card movie={4} />
          <Card movie={5} />
        </div>
      )
    }
  }

  const fetchPopularMovies = () => {
    Axios.get(`${Config.popularMoviesURL}`)
      .then((response) => {
        setData(response)

        console.log(data)
      })

      .catch((error) => console.log(error))
  }
  const displayPopular = () => {
    if (data) {
      return (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.map.data.results[0].poster_path}`}
            alt="sfds"
          ></img>
        </div>
      )
    }
  }

  return (
    <div className="home__container">
      <h1>Home!</h1>
      <span>Search movies</span>
      <input onChange={(event) => setSearch(event.target.value)}></input>
      <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
      <button onClick={() => console.log(data)}>Show Data</button>
      {/* {fetchPopularMovies()} */}
      {displayData()}
    </div>
  )
}
