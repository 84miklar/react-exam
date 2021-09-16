import axios from "axios"

const MovieAPI = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})

export default MovieAPI
