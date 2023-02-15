import { useContext} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';

function PageWithForm({
  title,
  submitFormDescription,
  linkLegend,
  linkText,
  linkUrl,
}) {
  const location = useContext(LocationContext);
  return (
    <div className="page-with-form">
      <form className="page-with-form__form">
      <p className="page-with-form__form-title">{title}</p>
      <fieldset className="page-with-form__form-inputs">
        <label className={`page-with-form__form-label ${location.pathname === "/login" ? "page-with-form__form-label_type_login" : ""}`}>
          <p className="page-with-form__form-input-title">Имя</p>
          <input className="page-with-form__form-input" type="text"></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </label>
        <label className="page-with-form__form-label">
          <p className="page-with-form__form-input-title">E-mail</p>
          <input className="page-with-form__form-input" type="email"></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </label>
        <label className="page-with-form__form-label">
          <p className="page-with-form__form-input-title">Пароль</p>
          <input className="page-with-form__form-input" type="password"></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </label>
      </fieldset>
        <button className="page-with-form__form-submit">{submitFormDescription}</button>
      </form>
      <p className="page-with-form__link-text">{linkLegend}<NavLink to={linkUrl} className="page-with-form__link">{linkText}</NavLink></p>
    </div>
  );
}

export default PageWithForm;