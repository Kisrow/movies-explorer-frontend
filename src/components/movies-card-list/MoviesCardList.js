import { useContext} from 'react';

import { LocationContext } from '../../context/LocationContext';
import MoviesCard from '../movies-card/MoviesCard';
import Preloader from '../preloader/Preloader';

function MoviesCardList({
  renderMovies,
  savedMovies,
  addNextRow,
  isButtonNextMoviesActive,
  saveMovie,
  deleteMovie,
  buttonDescription,
  isErrorHappend,
  isActivePreloader,
  isNoneSearch,
}) {
  const location = useContext(LocationContext);

  const cardsMovies = renderMovies.map((movie) => 
    <MoviesCard
      key = {location.pathname === "/movies" ? movie.id : movie.movieId}
      name = {movie.nameRU}
      duration = {movie.duration}
      link = {movie.trailerLink}
      poster = {location.pathname === "/movies" ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
      alt={movie.description}
      movie = {movie}
      saveMovie = {saveMovie}
      deleteMovie = {deleteMovie}
      buttonDescription = {buttonDescription}
      savedMovies = {savedMovies}
    />
  );
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <Preloader 
          isActivePreloader = {isActivePreloader}
        />
        <p className={`movies-card-list__error ${isErrorHappend ? "" : "movies-card-list__error_hidden"}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        <p className={`movies-card-list__error ${renderMovies.length === 0 && !isErrorHappend && !isActivePreloader && !isNoneSearch ? "" : "movies-card-list__error_hidden"}`}>Ничего не найдено</p>
        {cardsMovies}
      </div>
      <button onClick={addNextRow} className={`movies-card-list__next-movies ${
        location.pathname === "/movies" ? 
        isButtonNextMoviesActive ? 
        "" : "movies-card-list__next-movies_hidden" 
        : "movies-card-list__next-movies_type_saved-movies"}`}>Ещё</button>
    </div>
  );
}

export default MoviesCardList;