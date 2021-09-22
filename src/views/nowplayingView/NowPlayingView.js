import "./NowPlayingView.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../shared/provider/DataProvider";
import MovieAPIService from "../../shared/api/service/MovieAPIService";
import { DisplayData } from "../../functions/DisplayData";

export const NowPlayingView = () => {
  const [serverData, setServerData] = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    try {
      setLoading(true);
      const { data } = await MovieAPIService.getNowPlayingMovies();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="nowplaying__container">
      <h2 className="nowplaying__title">Playing now in theatres in Sweden</h2>
      {DisplayData(loading)}
    </div>
  );
};
