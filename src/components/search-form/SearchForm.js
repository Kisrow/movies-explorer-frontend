import { useContext } from 'react';

import { LocationContext } from '../../context/LocationContext';

import FilterCheckbox from '../flter-checkbox/FilterCheckbox';

import loop from '../../images/loop.svg';

function SearchForm({
  setChecked,
  isChecked,
  setShortChecked,
  isShortChecked,
  searchCardToRender,
  setSearchMovieName,
  searchMovieName,
  setSearchSavedMovieName,
  searchSavedMovieName,
  isErrorSearchForm,
}) {
  const location = useContext(LocationContext);

  function handlechangeFilmName(e) {
    if (location.pathname === '/movies') {
      setSearchMovieName(e.target.value);
    } else {
      setSearchSavedMovieName(e.target.value);
    }
  }

  function onSubmit(e) {
    e.preventDefault();

    searchCardToRender();
  }

  return (
    <form className="search-form" onSubmit={onSubmit} noValidate>
      <fieldset className="search-form__fieldset">
        <img src={loop} className="search-form__loop" alt="начало поля поиска фильма"/>
        <input 
          placeholder="Фильм" 
          onChange={handlechangeFilmName} 
          value={(location.pathname === "/movies" ? searchMovieName || "" : searchSavedMovieName)} 
          className="search-form__input" 
          type="text" 
          name="searchMovie"
          required
        />
        <button type="submit" className="search-form__button"></button>
      </fieldset>
      <span className={`search-form__input-error ${isErrorSearchForm ? "search-form__input-error_active" : ""}`}>Введите ключевое слово</span>
      <FilterCheckbox 
        setChecked = {setChecked}
        isChecked = {isChecked}
        setShortChecked = {setShortChecked}
        isShortChecked = {isShortChecked}
      />
    </form>
  );
}

export default SearchForm;