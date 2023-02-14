import { useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';


function Navigation({
  auth,
  isMobileMenuActive,
}) {
  const location = useContext(LocationContext)
  return (
    // navigation_hidden to hidden
    <nav className="navigation"> 
      <ul className={`${isMobileMenuActive ? "navigation__list_type_mobile" : "navigation__list"}`}>
        <li><NavLink exact to="/" className={`${isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation_hidden"}`} 
        activeClassName="navigation__list-item_type_mobile_active">Главная</NavLink></li>
        <li><NavLink to="/movies" className={
          `${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation__list-item navigation__list-item_type_movies" : "navigation_hidden"}`
          } activeClassName="navigation__list-item_type_mobile_active">Фильмы</NavLink>
        </li>
        <li><NavLink to="/saved-movies" className={
          `${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile" : "navigation__list-item navigation__list-item_type_saved-movies" : "navigation_hidden"}`
          } activeClassName="navigation__list-item_type_mobile_active">Сохранённые фильмы</NavLink></li>
        <li><NavLink to="/register" className={`${(location.pathname !== "/" || auth) ? "navigation_hidden" : "navigation__list-item"}`}>Регистрация</NavLink></li>
        <li><NavLink to="/login" className={`${(location.pathname !== "/" || auth) ? "navigation_hidden" : "navigation__list-item navigation__list-item_type_login"}`}>Войти</NavLink></li>
        <li><NavLink to="/profile" className={
          `${auth ? isMobileMenuActive ? "navigation__list-item_type_mobile-profile" : "navigation__list-item navigation__list-item_type_profile" : "navigation_hidden"}`
          }>Аккаунт
              <div className="navigation__list-item_type_profile-icon"></div>
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;