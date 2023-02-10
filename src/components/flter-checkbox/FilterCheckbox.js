function FilterCheckbox() {
  return (
    <div className="filterCheckbox">
      <input type="checkbox" className="custom-checkbox" id="chortMovie-checker" name="chortMovie-checker"></input>
      <label htmlFor="chortMovie-checker" className="custom-checkbox__label"></label>
      <p className="filterCheckbox__text">Короткометражки</p>
    </div>
    
  )
}

export default FilterCheckbox;