import { NavLink } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2 className="page-not-found__error-code">404</h2>
      <p className="page-not-found__error-name">Страница не найдена</p>
      <NavLink to="/" className="page-not-found__link-back">Назад</NavLink>
    </div>
  );
}

export default PageNotFound;