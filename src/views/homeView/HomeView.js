import React, { useState, useContext, useEffect } from "react"
import Axios from "axios"
import Config from "../../shared/api/config"
import "./HomeView.css"
import { Card } from "../../components/cards/Card"
import { DataContext, DataProvider } from "../../shared/provider/DataProvider"
import { Button } from "../../components/button/Button"
import WomanEating from "../../shared/img/woman_eating.jpg"

export const HomeView = () => {
  const [data, setData] = useContext(DataContext)
  const [search, setSearch] = useState()
  const [resultHeader, setResultHeader] = useState("Discover something new")

  useEffect(() => {
    fetchDiscoverMovie()
  }, [])

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

  const fetchDiscoverMovie = () => {
    Axios.get(`${Config.discoverMoviesURL}`)
      .then((response) => {
        setData(response)
      })

      .catch((error) => console.log(error))
  }

  const displayData = () => {
    if (data) {
      return (
        <div className="card__container">
          {data.data.results.map((el, index) => {
            return <Card movie={index} />
          })}
        </div>
      )
    }
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
            setResultHeader(event.target.value)
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
      <p className="result__header">{resultHeader}</p>
      {displayData()}
    </div>
  )
}
