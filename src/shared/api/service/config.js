const baseAPI_URL = "https://api.themoviedb.org/3/";
const API_Key = "api_key=baf9831bd66d107c8e6e596671afb208";
const trendingMoviesURL = `trending/movie/day?${API_Key}`;
const upcomingMoviesURL = `movie/upcoming?${API_Key}&language=en-US&region=SE&page=1`;
const highRankMoviesURL = `movie/top_rated?${API_Key}&language=en-US&region=SE&page=1`;
const nowPlayingURL = `movie/now_playing?${API_Key}&language=en-US&region=SE&page=1`;
const movieImageURL = "https://image.tmdb.org/t/p/";
const movieTrailerURL = "https://www.youtube.com/embed/";
const searchURL = `search/movie?${API_Key}&language=en-US&query=`;

export default {
  baseAPI_URL,
  API_Key,
  trendingMoviesURL,
  movieImageURL,
  movieTrailerURL,
  searchURL,
  upcomingMoviesURL,
  highRankMoviesURL,
  nowPlayingURL,
};
