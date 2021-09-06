import React, { useState, useContext, useEffect } from "react"
import Axios from "axios"
import Config from "../../shared/api/config"
import "./HomeView.css"
import { Card } from "../../components/cards/Card"
import { CardOneMovie } from "../../components/cards/CardOneMovie"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import {
  MovieDataContext,
  MovieDataProvider,
} from "../../shared/provider/MovieDataProvider"
import { Button } from "../../components/button/Button"

export const HomeView = () => {
  const [data, setData] = useContext(DataContext)
  const [oneMovieData, setOneMovieData] = useContext(MovieDataContext)
  const [search, setSearch] = useState()
  const [showAllMovies, setShowAllMovies] = useState(true)
  const [showMovie, setShowMovie] = useState(true)

  useEffect(() => {
    fetchRandomMovie()
    // setShowMovie(!showMovie)
  }, [])

  // useEffect(() => {
  //   displayOneData()
  //   console.log(showMovie)
  // }, [showMovie])

  // useEffect(() => {
  //   displayData()
  // }, [showAllMovies])

  const fetchDataFromExternalAPI = () => {
    if (search) {
      Axios.get(
        `${Config.baseAPI_URL}search/movie?${Config.API_Key}&language=en-US&query=${search}&page=1`
      )
        .then((response) => {
          setData(response)
          setShowAllMovies(!showAllMovies)
        })

        .catch((error) => console.log(error))
    }
  }

  const fetchRandomMovie = () => {
    Axios.get(`${Config.popularMoviesURL}`)
      .then((response) => {
        setData(response)
        setShowMovie(!showMovie)
      })

      .catch((error) => console.log(error))
  }

  // const displayOneData = () => {
  //   if (oneMovieData) {
  //     return (
  //       <div className="card__container">
  //         <CardOneMovie />
  //       </div>
  //     )
  //   }
  // }
  const displayData = () => {
    if (data) {
      return (
        <div className="card__container">
          {data.data.results.map((el, index) => {
            return <Card movie={index} />
          })}
          {/* <Card movie={0} />
          <Card movie={1} />
          <Card movie={2} />
          <Card movie={3} />
          <Card movie={4} /> */}
        </div>
      )
    }
  }

  console.log(data)
  return (
    <div className="home__container">
      <div className="search__container">
        <div className="title">
          <h1>Welcome to a global world of movie entertainement</h1>
        </div>

        <input
          className="input"
          onChange={(event) => setSearch(event.target.value)}
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
      {/* {displayOneData()} */}
      {displayData()}
    </div>
  )
}
