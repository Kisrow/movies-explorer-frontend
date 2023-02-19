import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function SavedMovies({
}) {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default SavedMovies;