import React, { useContext, useEffect } from "react"
import "./FavouritesView.css"
import { Card } from "../../components/cards/Card"
import LocalStorage from "../../shared/storage/LocalStorage"
import Config from "../../shared/api/service/config"
import { useState } from "react"
import logo from "../../shared/img/chairLogo.png"
import MovieAPIService from "../../shared/api/service/MovieAPIService"

export const FavouritesView = () => {
  const [favourite, setFavourite] = useState()

  useEffect(() => {
    fetchDataByMovieId()
  }, [])

  const fetchDataByMovieId = async () => {
    if (LocalStorage.favourites.length > 0) {
      const storedFavourites = JSON.parse(localStorage[LocalStorage.favourites])
      const favouritesArray = []

      storedFavourites.map(async (id) => {
        try {
          const { data } = await MovieAPIService.getMovieById(id)

          favouritesArray.push(data)
          setFavourite(favouritesArray)
        } catch (error) {
          console.log(error)
        }
      })
    }
  }

  // const display = () => {
  //   if (favourite) {
  //     return Promise.all(favourite).then((item) => {
  //       console.log(item)
  //       return (
  //         <div>
  //           <h3 key={item.original_title}>
  //             {showPoster(item.poster_path)}
  //             <br />
  //             {item.original_title}
  //           </h3>
  //         </div>
  //       )
  //     })
  //   } else {
  //     return <h2>No favourites yet...</h2>
  //   }
  // }

  const display = () => {
    if (favourite) {
      return favourite.map((item) => {
        console.log(item)
        return (
          <div>
            <h3 key={item.original_title}>
              {showPoster(item.poster_path)}
              <br />
              {item.original_title}
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
        <h1>Your favourite movies</h1>
        <div className="favourites">{display()}</div>
      </Card>
    </div>
  )
}
