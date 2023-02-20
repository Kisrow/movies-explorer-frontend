import { useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';
import logo from '../../images/logo.svg';
import Navigation from '../navigation/Navigation';


function Header({
  handleMobileMenyIconClick,
  logedIn,
}) {
  const location = useContext(LocationContext);
  return (
    <div className={`header ${location.pathname === "/register" || location.pathname === "/login" ? "header_type_small" : ""}`}>
      <NavLink to="/" className="header__logo-link"><img src={logo} alt="logo" /></NavLink>
      <Navigation 
        logedIn = {logedIn}
      />
      <button className={`header__mobile-menu-icon ${logedIn ? "" : "header__mobile-menu-icon_hidden"}`} onClick={handleMobileMenyIconClick}></button>
    </div>
  );
}

export default Header;