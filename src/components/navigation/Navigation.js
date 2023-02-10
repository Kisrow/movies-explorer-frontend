import { NavLink } from 'react-router-dom';

import profileIcon from '../../images/profile-icon.svg';
import mobileMenu from '../../images/mobile-menu.svg';


function Navigation({
  children
}) {
  return (
    // navigation_hidden to hidden
    <nav className="navigation "> 
      <ul className="navigation__list">
        {/* <li><NavLink to="/" className="navigation__list-item">Главная</NavLink></li> */}
        {/* <li><NavLink to="/movies" className="navigation__list-item navigation__list-item_type_movies">Фильмы</NavLink></li>
        <li><NavLink to="/saved-movies" className="navigation__list-item navigation__list-item_type_saved-movies">Сохраненные фильмы</NavLink></li>
        <li><NavLink to="/register" className="navigation__list-item" >Регистрация</NavLink></li>
        <li><NavLink to="/login" className="navigation__list-item navigation__list-item_type_login" >Войти</NavLink></li>
        <li><NavLink to="/profile" className="navigation__list-item navigation__list-item_type_profile" >
              Аккаунт
              <div className="navigation__list-item_type_profile-icon"></div>
            </NavLink>
        </li> */}
        {/* <li><img src={mobileMenu} alt="открыть меню"/></li> */}
      </ul>
    </nav>
  )
}

export default Navigation;