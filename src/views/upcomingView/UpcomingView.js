import "./UpcomingView.css";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../shared/provider/DataProvider";
import MovieAPIService from "../../shared/api/service/MovieAPIService";
import { DisplayData } from "../../functions/DisplayData";

export const UpcomingView = () => {
  const [serverData, setServerData] = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    try {
      setLoading(true);
      const { data } = await MovieAPIService.getUpcomingMovies();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="upcoming__container">
      <h2 className="upcoming__title">Upcoming movies in Sweden</h2>
      {DisplayData(loading)}
    </div>
  );
};
