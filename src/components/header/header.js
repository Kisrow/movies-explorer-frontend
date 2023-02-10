import logo from '../../images/logo.svg';
import mobileMenu from '../../images/mobile-menu.svg';
import Navigation from '../navigation/Navigation';


function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <Navigation />
      <img src={mobileMenu} alt="открыть меню"/>
    </div>
  )
}

export default Header;