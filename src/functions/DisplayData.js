import { Spinner } from "../components/spinner/Spinner";
import { DataContext, DataProvider } from "../shared/provider/DataProvider";
import { useContext } from "react";
import { useHistory } from "react-router";
import RoutingPath from "../routes/RoutingPath";
import { MovieCard } from "../components/cards/MovieCard";

export const DisplayData = (loading) => {
  const history = useHistory();
  const [serverData, setServerData] = useContext(DataContext);

  if (loading) {
    return <Spinner />;
  } else {
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
  }
};
