import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
