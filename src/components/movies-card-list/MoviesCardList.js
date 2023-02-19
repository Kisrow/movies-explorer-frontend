import { useContext} from 'react';

import { LocationContext } from '../../context/LocationContext';
import MoviesCard from '../movies-card/MoviesCard';

function MoviesCardList({
  renderMovies,
  addNextRow,
  isButtonNextMoviesActive,
}) {
  const location = useContext(LocationContext);

  const cardsMovies = renderMovies.map((i) => 
    <MoviesCard
      key = {i.id}
      name = {i.nameRU}
      duration = {i.duration}
      link = {i.trailerLink}
      poster = {`https://api.nomoreparties.co${i.image.url}`}
    />
  );
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
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