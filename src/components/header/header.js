import { useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';
import logo from '../../images/logo.svg';
import Navigation from '../navigation/Navigation';


function Header({
  handleMobileMenyIconClick,
  auth,
}) {
  const location = useContext(LocationContext);
  return (
    <div className={`header ${location.pathname === "/register" || location.pathname === "/login" ? "header_type_small" : ""}`}>
      <NavLink to="/" ><img src={logo} alt="logo" className="header__logo" /></NavLink>
      <Navigation 
        auth = {auth}
      />
      <button className={`header__mobile-menu-icon ${auth ? "" : "header__mobile-menu-icon_hidden"}`} onClick={handleMobileMenyIconClick}></button>
    </div>
  );
}

export default Header;