import "./HighestRankView.css";
import { DisplayData } from "../../functions/DisplayData";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../shared/provider/DataProvider";
import MovieAPIService from "../../shared/api/service/MovieAPIService";

export const HighestRankView = () => {
  const [serverData, setServerData] = useContext(DataContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHighRankMovies();
  }, []);

  const fetchHighRankMovies = async () => {
    try {
      setLoading(true);
      const { data } = await MovieAPIService.getHighRankMovies();
      setServerData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="upcoming__title">Top rated movies in Sweden</h2>
      {DisplayData(loading)}
    </div>
  );
};
