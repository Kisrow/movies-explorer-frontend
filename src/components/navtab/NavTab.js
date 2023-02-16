import { NAVTAB_ITEMS } from '../../utils/constants';

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
  );
}

export default NavTab;