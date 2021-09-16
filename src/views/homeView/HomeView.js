import React, { useState, useContext, useEffect } from "react"
import Axios from "axios"
import Config from "../../shared/api/service/config"
import "./HomeView.css"
import { MovieCard } from "../../components/cards/MovieCard"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import { Button } from "../../components/button/Button"
import { Spinner } from "../../components/spinner/Spinner"
import RoutingPath from "../../routes/RoutingPath"
import { useHistory } from "react-router"
import { MovieAPIService } from "../../shared/api/service/MovieAPIService"

export const HomeView = () => {
  const [data, setData] = useContext(DataContext)
  const [search, setSearch] = useState()
  const history = useHistory()

  useEffect(() => {
    fetchDiscoverMovie()
  }, [])

  const fetchDiscoverMovie = () => {
    Axios.get(Config.trendingMoviesURL)
      .then((response) => {
        setData(response)
      })

      .catch((error) => console.log(error))
  }

  const fetchSearchDataFromExternalAPI = () => {
    if (search) {
      Axios.get(Config.search_URL + search)
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

  return (
    <div className="home__container">
      <header className="search__container">
        <div className="title">
          <h1>Welcome to a world of global movie entertainement</h1>
        </div>

        <input
          className="input"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
          placeholder="Search movies"
          onKeyDown={() => {
            fetchSearchDataFromExternalAPI()
          }}
        ></input>
        <span
          onClick={() => {
            fetchSearchDataFromExternalAPI()
          }}
        >
          <Button label="search" />
        </span>
      </header>
      <div className="result__container">{loadingCards()}</div>
    </div>
  )
}
