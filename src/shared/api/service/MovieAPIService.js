import MovieAPI from "../MovieAPI"
import http from "../MovieAPI"
import Config from "../config"

const searchMovie = (search) => {
  return http.get(Config.searchURL + search)
}
const getTrendingMovies = () => {
  return http.get(Config.trendingMoviesURL)
}
const getPlayableMovieFromData = (movieId) => {
  return http.get(`movie/${movieId}/videos?${Config.API_Key}&language=en-US`)
}

export default {
  searchMovie,
  getTrendingMovies,
}
