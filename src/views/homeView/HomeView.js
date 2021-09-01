import React, { useState } from "react"
import Axios from "axios"
import Config from "../../shared/api/config"

export const HomeView = () => {
  const [data, setData] = useState()
  const [search, setSearch] = useState()
  const fetchDataFromExternalAPI = () => {
    Axios.get(
      `${Config.baseAPI_URL}search/movie?${Config.API_Key}&language=en-US&query=${search}&page=1`
    )
      .then((response) => {
        setData(response)
      })

      .catch((error) => console.log(error))
  }

  const displayData = () => {
    if (data) {
      return (
        <div>
          <h3>Name: {data.data.results[0].original_title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w300/${data.data.results[0].poster_path}`}
            alt="sfds"
          ></img>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Home!</h1>
      <span>Search movies</span>
      <input onChange={(event) => setSearch(event.target.value)}></input>
      <button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
      {displayData()}
      <button onClick={() => console.log(data)}>Show Data</button>
    </div>
  )
}
