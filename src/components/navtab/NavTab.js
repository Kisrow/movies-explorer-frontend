// import { NavLink } from 'react-router-dom';

import { NAVTAB_ITEMS } from '../../utils/constnants';

function NavTab() {
  const navTabItems = NAVTAB_ITEMS.map((item, index) => 
    <li className="navtab__list-item" key={index}>
      <a href={item.link} className="navtab__list-link">{item.name}</a>
    </li>
  );

  return (
    <nav className="navtab">
      <ul className="navtab__list">
        {navTabItems}
      </ul>
    </nav>
  )
}
// <NavLink to={item.link} className="navtab__list-link"><a href={item.link}>{item.name}</a></NavLink>
export default NavTab;