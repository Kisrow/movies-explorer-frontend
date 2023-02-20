import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function SavedMovies({
  savedMovies,
}) {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList 
        renderMovies = {savedMovies}
      />
    </div>
  );
}

export default SavedMovies;