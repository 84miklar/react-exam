import "./HomeView.css";
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { MovieCard } from "../../components/cards/MovieCard";
import { DataContext, DataProvider } from "../../shared/provider/DataProvider";
import { Button } from "../../components/button/Button";
import { Spinner } from "../../components/spinner/Spinner";
import RoutingPath from "../../routes/RoutingPath";
import MovieAPIService from "../../shared/api/service/MovieAPIService";
import { useDebounce } from "../../shared/hooks/useDebounce";

export const HomeView = () => {
  const [serverData, setServerData] = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [searchTitle, setsearchTitle] = useState("Trending movies");
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const debounceValue = useDebounce(search, 3000);

  useEffect(() => {
    fetchDiscoverMovie();
  }, []);

  useEffect(() => {
    fetchSearchDataFromAPI();
  }, [debounceValue]);

  const fetchDiscoverMovie = async () => {
    try {
      setLoading(true);
      const { data } = await MovieAPIService.getTrendingMovies();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchDataFromAPI = async () => {
    try {
      setLoading(true);
      const { data } = await MovieAPIService.searchMovie(search);
      setServerData(data);
      setLoading(false);
      setsearchTitle(search);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSearchTitle = () => {
    // search ? setsearchTitle(search) : setsearchTitle("Trending movies")
    if (search === "") {
      setsearchTitle(search);
    } else {
      setsearchTitle("Trending movies");
    }
    return <h3>{searchTitle}</h3>;
  };

  const displayData = () => {
    if (serverData) {
      return (
        <div className="card__container">
          {serverData?.results?.map((el, index) => {
            return (
              <span
                className="movie__poster"
                onClick={() => history.push(RoutingPath.movieView, index)}
              >
                <MovieCard movie={index} />
              </span>
            );
          })}
        </div>
      );
    } else {
      return <Spinner />;
    }
  };

  const handleSearch = (event) => {
    setSearch(event);
    setsearchTitle(null);
  };

  return (
    <div className="home__container">
      <header className="search__container">
        <div className="title">
          <h1>Welcome to a world of global movie entertainement</h1>
        </div>

        <input
          className="input"
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
          onKeyDown={(event) =>
            event.key === "Enter" && handleSearch(event.target.value)
          }
          placeholder="Search movies"
        ></input>
        <span
          onClick={() => {
            fetchSearchDataFromAPI();
          }}
        >
          <Button label="search" />
        </span>
      </header>
      <h2>{searchTitle}</h2>
      <div className="result__container">{displayData()}</div>
    </div>
  );
};
