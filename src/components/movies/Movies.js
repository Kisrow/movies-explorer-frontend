import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import { useEffect, useState } from 'react';

function Movies({
  setChecked,
  searchCardToRender,
  renderMovies,
}) {
  const [renderMoviesVisibleRows, setRenderMoviesVisibleRows] = useState([]);
  const [isButtonNextMoviesActive, setButtonNextMoviesActive] = useState(true);

  /* при изменении количества карточек для отрисовки будет эффект - если карточек больше 
  или равно 13 (length на 1 больше чем максимальный индекс) режем массив и показываем 12 
  первых карточек, иначе - показываем все */
  useEffect(() => {
    if (renderMovies.length >= 12) {
      setRenderMoviesVisibleRows(renderMovies.slice(0,12));
      setButtonNextMoviesActive(true);
    } else {
      setRenderMoviesVisibleRows(renderMovies);
      setButtonNextMoviesActive(false);
    } 
  },[renderMovies])

  /* добавить новый ряд на обозрение */
  function addNextRow() {
    if (renderMovies.length - renderMoviesVisibleRows.length >= 3) {
      setRenderMoviesVisibleRows(renderMoviesVisibleRows.concat(renderMovies.slice(renderMoviesVisibleRows.length, renderMoviesVisibleRows.length + 3)));
    } else {
      setRenderMoviesVisibleRows(renderMoviesVisibleRows.concat(renderMovies.slice(renderMoviesVisibleRows.length, renderMovies.length)));
      setButtonNextMoviesActive(false);
    }
  }

  return (
    <section className="movies">
      <SearchForm 
        setChecked = {setChecked}
        searchCardToRender = {searchCardToRender}
      />
      <MoviesCardList 
        renderMovies = {renderMoviesVisibleRows}
        addNextRow = {addNextRow}
        isButtonNextMoviesActive = {isButtonNextMoviesActive}
      />
    </section>
  );
}

export default Movies;
