import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';

function SavedMovies({
  savedMovies,
  renderSavedMovies,
  deleteMovie,
  searchCardToRender,
  setShortChecked,
  isShortChecked,
  setSearchSavedMovieName,
  searchSavedMovieName,
  isErrorGetSavedMovies,
}) {
  return (
    <div className="saved-movies">
      <SearchForm 
        searchCardToRender = {searchCardToRender}
        setShortChecked = {setShortChecked}
        isShortChecked = {isShortChecked}
        setSearchSavedMovieName = {setSearchSavedMovieName}
        searchSavedMovieName = {searchSavedMovieName}
      />
      <MoviesCardList 
        renderMovies = {renderSavedMovies}
        savedMovies = {savedMovies}
        deleteMovie = {deleteMovie}
        isErrorHappend = {isErrorGetSavedMovies}
      />
    </div>
  );
}

export default SavedMovies;