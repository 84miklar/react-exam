import "./HomeView.css";
import React, { useState, useContext, useEffect } from "react";
import { DataContext, DataProvider } from "../../shared/provider/DataProvider";
import { Button } from "../../components/button/Button";
import MovieAPIService from "../../shared/api/service/MovieAPIService";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { DisplayData } from "../../functions/DisplayData";

export const HomeView = () => {
  const [serverData, setServerData] = useContext(DataContext);
  const [search, setSearch] = useState("");
  const [searchTitle, setsearchTitle] = useState("Trending movies");
  const [loading, setLoading] = useState(true);
  const debounceValue = useDebounce(search, 1000);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  useEffect(() => {
    fetchSearchDataFromAPI();
  }, [debounceValue]);

  const fetchTrendingMovies = async () => {
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
      <div className="result__container">{DisplayData(loading)}</div>
    </div>
  );
};
