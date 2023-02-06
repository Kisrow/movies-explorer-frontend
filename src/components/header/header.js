import logo from '../../images/logo.svg'
import Navigation from '../navigation/Navigation'

function Header() {
  return (
    <div className="header">
      <div className="header__logo"> 
        <img src={logo} alt="logo" />
      </div>
      <Navigation />
      <ul className="header__button-list">
        <li><button aria-label="открыть окно регистрации" className="header__button" type="button">Регистрация</button></li>
        <li><button aria-label="открыть окно логирования" className="header__button header__button_type_login" type="button">Войти</button></li>
      </ul>
    </div>
  )
}

export default Header;