import FilterCheckbox from '../flter-checkbox/FilterCheckbox';

import loop from '../../images/loop.svg';

function SearchForm() {
  return (
    <form className="search-form" noValidate>
      <fieldset className="search-form__fieldset">
        <img src={loop} className="search-form__loop" alt="начало поля поиска фильма"/>
        <input placeholder="Фильм" className="search-form__input" type="text" name="searchMovie" required></input>
        <button type="submit" className="search-form__button"></button>
      </fieldset>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;