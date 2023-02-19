import { useState } from 'react';

import FilterCheckbox from '../flter-checkbox/FilterCheckbox';

import loop from '../../images/loop.svg';

function SearchForm({
  setChecked,
  searchCardToRender,
}) {
  const [filmName, setFilmName] = useState('');

  function handlechangeFilmName(e) {
    setFilmName(e.target.value.toLowerCase());
  }

  function onSubmit(e) {
    e.preventDefault();
    searchCardToRender(filmName);
  }

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <fieldset className="search-form__fieldset">
        <img src={loop} className="search-form__loop" alt="начало поля поиска фильма"/>
        <input placeholder="Фильм" onChange={handlechangeFilmName} className="search-form__input" type="text" name="searchMovie" required></input>
        <button type="submit" className="search-form__button"></button>
      </fieldset>
      <FilterCheckbox 
        setChecked = {setChecked}
      />
    </form>
  );
}

export default SearchForm;