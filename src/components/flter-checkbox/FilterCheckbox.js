function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <input type="checkbox" className="filter-checkbox__custom-checkbox" id="chortMovie-checker" name="chortMovie-checker"></input>
      <label htmlFor="chortMovie-checker" className="filter-checkbox__custom-checkbox-label"></label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;