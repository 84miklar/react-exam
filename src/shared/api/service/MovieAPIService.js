import http from "../MovieAPI";
import Config from "./config";

const searchMovie = (search) => {
  return http.get(Config.searchURL + search);
};

const getTrendingMovies = () => {
  return http.get(Config.trendingMoviesURL);
};
const getUpcomingMovies = () => {
  return http.get(Config.upcomingMoviesURL);
};
const getHighRankMovies = () => {
  return http.get(Config.highRankMoviesURL);
};
const getNowPlayingMovies = () => {
  return http.get(Config.nowPlayingURL);
};
const getPlayableMovieFromData = (movieId) => {
  return http.get(`movie/${movieId}/videos?${Config.API_Key}&language=en-US`);
};
const getMovieById = (movieId) => {
  return http.get(`movie/${movieId}?${Config.API_Key}&language=en-US`);
};

export default {
  searchMovie,
  getTrendingMovies,
  getPlayableMovieFromData,
  getMovieById,
  getUpcomingMovies,
  getHighRankMovies,
  getNowPlayingMovies,
};
