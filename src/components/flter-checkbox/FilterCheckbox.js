import { useContext } from 'react';

import { LocationContext } from '../../context/LocationContext';

function FilterCheckbox({
  setChecked,
  isChecked,
  setShortChecked,
  isShortChecked,
}) {
  const location = useContext(LocationContext);

  function checkboxChangeState(e) {
    if (location.pathname === '/movies') {
      setChecked(e.target.checked)
      sessionStorage.setItem("checkbox", e.target.checked);
    } else {
      setShortChecked(e.target.checked);
    }
    
  }
  return (
    <div className="filter-checkbox">
      <input 
        checked={location.pathname === '/movies' ? isChecked : isShortChecked}
        type="checkbox"
        className="filter-checkbox__custom-checkbox"
        id="chortMovie-checker"
        name="chortMovie-checker"
        onChange={checkboxChangeState}
      />
      <label htmlFor="chortMovie-checker" className="filter-checkbox__custom-checkbox-label"></label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}

export default FilterCheckbox;