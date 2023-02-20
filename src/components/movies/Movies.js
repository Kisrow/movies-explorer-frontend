import SearchForm from '../search-form/SearchForm';
import MoviesCardList from '../movies-card-list/MoviesCardList';
import { useEffect, useLayoutEffect, useState } from 'react';

function Movies({
  setChecked,
  searchCardToRender,
  renderMovies,
}) {
  const [renderMoviesVisibleRows, setRenderMoviesVisibleRows] = useState([]);
  const [isButtonNextMoviesActive, setButtonNextMoviesActive] = useState(true);
  const [clientWidth, setClientWidth] = useState(0);

  useLayoutEffect(() => {
    window.addEventListener('resize', checkClientWidth);
    checkClientWidth();
    return () => window.removeEventListener('resize', checkClientWidth);
  },[clientWidth])

  function checkClientWidth() {
    setTimeout(setClientWidth(document.documentElement.clientWidth), 500);
  };

  /* при изменении количества карточек для отрисовки будет эффект - если карточек больше 
  или равно 13 (length на 1 больше чем максимальный индекс) режем массив и показываем 12 
  первых карточек, иначе - показываем все */
  useEffect(() => {
    if (clientWidth >= 1276) {
      if (renderMovies.length >= 12) {
        setRenderMoviesVisibleRows(renderMovies.slice(0,12));
        setButtonNextMoviesActive(true);
      } else {
        setRenderMoviesVisibleRows(renderMovies);
        setButtonNextMoviesActive(false);
      } 
    } else if (clientWidth >= 768) {
      if (renderMovies.length >= 8) {
        setRenderMoviesVisibleRows(renderMovies.slice(0,8));
        setButtonNextMoviesActive(true);
      } else {
        setRenderMoviesVisibleRows(renderMovies);
        setButtonNextMoviesActive(false);
      } 
    } else if (clientWidth >= 320) {
      if (renderMovies.length >= 5) {
        setRenderMoviesVisibleRows(renderMovies.slice(0,5));
        setButtonNextMoviesActive(true);
      } else {
        setRenderMoviesVisibleRows(renderMovies);
        setButtonNextMoviesActive(false);
      }
    }
  },[renderMovies, clientWidth])

  /* добавить новый ряд на обозрение */
  function addNextRow() {
    if (clientWidth >= 1276) {
      addNextRowDef(3)
    } else if (clientWidth >= 320) {
      addNextRowDef(2)
    }
  };

  function addNextRowDef(countAddMovies) {
    if (renderMovies.length - renderMoviesVisibleRows.length >= countAddMovies) {
      setRenderMoviesVisibleRows(renderMoviesVisibleRows.concat(renderMovies.slice(renderMoviesVisibleRows.length, renderMoviesVisibleRows.length + countAddMovies)));
    } else {
      setRenderMoviesVisibleRows(renderMoviesVisibleRows.concat(renderMovies.slice(renderMoviesVisibleRows.length, renderMovies.length)));
      setButtonNextMoviesActive(false);
    }
  };

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
