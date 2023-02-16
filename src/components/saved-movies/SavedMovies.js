import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function SavedMovies() {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;