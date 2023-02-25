import { useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';


function Register({
  register,
  registerErrorText,
  setRegisterErrorText,
}) {

  const  {values, errorMessage, isValid, formReset, handleChange } = useFormValidation();

  useEffect(() => {
    formReset();
    setRegisterErrorText('');
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    register(values.name, values.email, values.password);
  }
  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit} noValidate>
        <p className="register__form-title">Добро пожаловать!</p>
        <fieldset className="register__form-inputs">
          <div className="register__form-container">
            <p className="register__form-input-title">Имя</p>
            <input
              className="register__form-input"
              type="text"
              name="name"
              value={values.name || ''}
              onChange={handleChange}
              minLength="2"
              required
            />
            <span className={`register__form-input-error ${isValid.name ? "" : "register__form-input-error_active"}`}>{errorMessage.name}</span>
          </div>
          <div className="register__form-container">
            <p className="register__form-input-title">E-mail</p>
            <input
              className="register__form-input"
              type="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span className={`register__form-input-error ${isValid.email ? "" : "register__form-input-error_active"}`}>{errorMessage.email}</span>
          </div>
          <div className="register__form-container">
            <p className="register__form-input-title">Пароль</p>
            <input
            className="register__form-input"
            type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            minLength="3"
            required
          />
            <span className={`register__form-input-error ${isValid.password ? "" : "register__form-input-error_active"}`}>{errorMessage.password}</span>
          </div>
        </fieldset>
        <span className="register__form-button-error register__form-button-error_active">{registerErrorText}</span>
        <button className="register__form-submit" type="submit" disabled={!isValid}>Зарегистрироваться</button>
      </form>
      <p className="register__link-text">Уже зарегистрированы?<NavLink to="/login" className="register__link">Войти</NavLink></p>
    </section>
  );
}

export default Register;