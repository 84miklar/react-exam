import React, { useContext, useEffect } from "react"
import "./FavouritesView.css"
import { MovieCard } from "../../components/cards/MovieCard"
import { Card } from "../../components/cards/Card"
import { DataContext } from "../../shared/provider/DataProvider"
import { useHistory } from "react-router"
import RoutingPath from "../../routes/RoutingPath"
import LocalStorage from "../../shared/storage/LocalStorage"
import Axios from "axios"
import Config from "../../shared/api/config"
import { useState } from "react"
import logo from "../../shared/img/chairLogo.png"

export const FavouritesView = () => {
  const [favourite, setFavourite] = useState()
  const history = useHistory()
  const favs = []

  useEffect(() => {
    fetchDataByMovieId()
  }, [])

  const fetchDataByMovieId = () => {
    if (LocalStorage.favourites.length > 0) {
      const storedFavourites = JSON.parse(localStorage[LocalStorage.favourites])

      storedFavourites.map((el) => {
        Axios.get(`${Config.baseAPI_URL}movie/${el}?${Config.API_Key}`)
          .then((response) => {
            favs.push(response)
            setFavourite(favs)
          })

          .catch((error) => console.log(error))
      })
    } else history.push(RoutingPath.homeView)
  }

  const display = () => {
    if (favourite) {
      return favourite.map((item) => {
        //console.log(item.data.original_title)

        return (
          <div>
            <h3 key={item.data.original_title}>
              {showPoster(item.data.poster_path)}
              <br />
              {item.data.original_title}
            </h3>
          </div>
        )
      })
    } else {
      return <h2>No favourites yet...</h2>
    }
  }

  const showPoster = (props) => {
    if (props) {
      return (
        <img
          className="poster"
          src={`${Config.movieImageURL}w200/${props}`}
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

  return (
    <div className="favourite__container">
      <Card>
        {" "}
        <h1>Your favourite movies</h1>
        <div className="favourites">{display()}</div>
      </Card>
    </div>
  )
}
