import React, { useState, useContext, useEffect } from "react"
import Axios from "axios"
import Config from "../../shared/api/config"
import "./HomeView.css"
import { MovieCard } from "../../components/cards/MovieCard"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import { Button } from "../../components/button/Button"
import WomanEating from "../../shared/img/woman_eating.jpg"
import { Spinner } from "../../components/spinner/Spinner"
import RoutingPath from "../../routes/RoutingPath"
import { useHistory } from "react-router"

export const HomeView = () => {
  const [data, setData] = useContext(DataContext)
  const [search, setSearch] = useState()

  const history = useHistory()

  useEffect(() => {
    fetchDiscoverMovie()
  }, [])

  const fetchDiscoverMovie = () => {
    Axios.get(`${Config.discoverMoviesURL}`)
      .then((response) => {
        setData(response)
      })

      .catch((error) => console.log(error))
  }

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
          {data.data.results.map((el, index) => {
            return (
              <span
                className="movie__poster"
                onClick={() => history.push(RoutingPath.movieView, index)}
              >
                <MovieCard movie={index} />
              </span>
            )
          })}
        </div>
      )
    }
  }

  const loadingCards = () => {
    if (!data) return <Spinner />
    return displayData()
  }

  console.log(data)
  return (
    <div className="home__container">
      <div className="search__container">
        <div className="title">
          <img
            className="title--img"
            src={WomanEating}
            alt="woman eating popcorn"
          ></img>
          <h1>Welcome to a global world of movie entertainement</h1>
        </div>

        <input
          className="input"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder="Search movies"
          onKeyDown={() => {
            fetchDataFromExternalAPI()
          }}
        ></input>
        <span
          onClick={() => {
            fetchDataFromExternalAPI()
          }}
        >
          <Button label="search" />
        </span>
      </div>

      {loadingCards()}
    </div>
  )
}
