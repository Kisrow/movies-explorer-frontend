import { useContext } from 'react';

import { LocationContext } from '../../context/LocationContext';

function MoviesCard({
  name,
  duration,
  link,
  poster,
  alt,
  movie,
  saveMovie,
  deleteMovie,
  buttonDescription,
  savedMovies,
}) {
  const location = useContext(LocationContext);

  const isSaved = savedMovies.some((savedMovie) => savedMovie.movieId === movie.id);

  const hours = Math.floor(movie.duration / 60);
  const minutes = (movie.duration % 60);
  const durationLine = `${hours} ч ${minutes} мин`

  function handleButtonClick(e) {
    e.preventDefault();
    if (location.pathname === "/movies" && !isSaved) {
      saveMovie(movie);
    } else {
      deleteMovie(location.pathname === "/movies" ? savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)._id : movie._id);
    }
  }
  return (
    <div className="movies-card">
      <div className="movies-card__date">
        <h2 className="movies-card__name">{name}</h2>
        <p className="movies-card__duration">{durationLine}</p>
      </div>
      <a href={link} className="movies-card__movie-link" target="_blank" rel="noreferrer" >
        <img className="movies-card__movie" src={poster} alt={alt}></img>
      </a>
      <button className={`movies-card__button ${
        location.pathname === "/movies" ?
        isSaved ?
        "movies-card__button_type_saved-movie" :
        "movies-card__button_type_save-movie" :
        "movies-card__button_type_delete-movie"}`} 
        onClick={handleButtonClick}>{isSaved ? "" : buttonDescription}</button>
    </div>
  );
}

export default MoviesCard;