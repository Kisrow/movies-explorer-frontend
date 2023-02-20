import { useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';

import { LocationContext } from '../../context/LocationContext';

function PageWithForm({
  title,
  submitFormDescription,
  linkLegend,
  linkText,
  linkUrl,
  formSubmit,
}) {
  const location = useContext(LocationContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (location.pathname === '/register') {
      formSubmit(name, email, password);
    } else {
      formSubmit(email, password)
    }
  }
  return (
    <div className="page-with-form">
      <form className="page-with-form__form" onSubmit={handleSubmit}>
      <p className="page-with-form__form-title">{title}</p>
      <fieldset className="page-with-form__form-inputs">
        <div className={`page-with-form__form-container ${location.pathname === "/login" ? "page-with-form__form-container_type_login" : ""}`}>
          <p className="page-with-form__form-input-title">Имя</p>
          <input className="page-with-form__form-input" type="text" value={name || ''} onChange={handleChangeName}></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </div>
        <div className="page-with-form__form-container">
          <p className="page-with-form__form-input-title">E-mail</p>
          <input className="page-with-form__form-input" type="email" value={email || ''} onChange={handleChangeEmail}></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </div>
        <div className="page-with-form__form-container">
          <p className="page-with-form__form-input-title">Пароль</p>
          <input className="page-with-form__form-input" type="password" value={password || ''} onChange={handleChangePassword}></input>
          <span className="page-with-form__form-input-error">текст ошибки</span>
        </div>
      </fieldset>
        <button className="page-with-form__form-submit" type="submit">{submitFormDescription}</button>
      </form>
      <p className="page-with-form__link-text">{linkLegend}<NavLink to={linkUrl} className="page-with-form__link">{linkText}</NavLink></p>
    </div>
  );
}

export default PageWithForm;