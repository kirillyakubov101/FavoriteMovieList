import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="container">
      <div className="movie-card">
        <div className="moview-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFavoriteClick}
            >
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
