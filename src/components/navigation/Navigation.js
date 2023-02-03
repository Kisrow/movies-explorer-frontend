import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li><NavLink to="#" className="navigation__list-item">Фильмы</NavLink></li>
        <li><NavLink to="#" className="navigation__list-item">Сохраненные фильмы</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation;