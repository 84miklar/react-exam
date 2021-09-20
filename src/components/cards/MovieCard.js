import { useContext } from "react";
import { DataContext, DataProvider } from "../../shared/provider/DataProvider";
import "./MovieCard.css";
import logo from "../../shared/img/chairLogo.png";
import Config from "../../shared/api/service/config";

export const MovieCard = (props) => {
  const [data, setData] = useContext(DataContext);

  const showPoster = () => {
    if (data.results[props.movie].poster_path) {
      return (
        <img
          className="poster"
          src={`${Config.movieImageURL}w200/${
            data.results[props.movie].poster_path
          }`}
          alt="movie poster"
        ></img>
      );
    } else {
      return (
        <div className="alt__Img">
          <img src={logo} alt="No movie poster"></img>
        </div>
      );
    }
  };

  if (data) {
    return (
      <div className="card">
        {showPoster()}
        <h3>{data.results[props.movie].original_title}</h3>
      </div>
    );
  }
};
