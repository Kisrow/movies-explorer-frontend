import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function Movies({
  movies,
  checkboxChangeState,
  filterByCheckbox,
  filterByMovieName,
}) {
  return (
    <section className="movies">
      <SearchForm 
        checkboxChangeState ={checkboxChangeState}
      />
      <MoviesCardList 
        movies = {movies}
        filterByCheckbox = {filterByCheckbox}
        filterByMovieName = {filterByMovieName}
      />
    </section>
  );
}

export default Movies;
