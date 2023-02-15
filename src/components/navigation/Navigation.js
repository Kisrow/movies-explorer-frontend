import { useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';


function Navigation({
  auth,
  isMobileMenuActive,
}) {
  const location = useContext(LocationContext);
  return (
    <nav className="navigation"> 
      <ul className={`navigation__list ${isMobileMenuActive ? "navigation__list_type_mobile" : ""}`}>
        <li><NavLink exact to="/" className={`navigation__list-item ${isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation_hidden"}`} 
        activeClassName="navigation__list-item_type_mobile-active">Главная</NavLink></li>
        <li><NavLink to="/movies" className={
          `navigation__list-item ${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation__list-item_type_movies" : "navigation_hidden"}`
          } activeClassName="navigation__list-item_type_mobile-active">Фильмы</NavLink>
        </li>
        <li><NavLink to="/saved-movies" className={
          `navigation__list-item ${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation__list-item_type_saved-movies" : "navigation_hidden"}`
          } activeClassName="navigation__list-item_type_mobile-active">Сохранённые фильмы</NavLink></li>
        <li><NavLink to="/register" className={`navigation__list-item ${(location.pathname !== "/" || auth) ? "navigation_hidden" : ""}`}>Регистрация</NavLink></li>
        <li><NavLink to="/login" className={`navigation__list-item ${(location.pathname !== "/" || auth) ? "navigation_hidden" : "navigation__list-item_type_login"}`}>Войти</NavLink></li>
        <li><NavLink to="/profile" className={
          `navigation__list-item ${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile-profile" : "navigation__list-item_type_profile" : "navigation_hidden"}`
          }>Аккаунт
              <div className="navigation__list-item-icon"></div>
            </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;