import { useEffect} from 'react';
import { NavLink } from 'react-router-dom';

import { useFormValidation } from '../../utils/useFormValidation';

function Login({
  login,
  loginErrorText,
  setLoginErrorText,
}) {

  const  {values, errorMessage, isValid, formReset, handleChange } = useFormValidation();

  useEffect(() => {
    formReset()
    setLoginErrorText('');
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    login(values.email, values.password);
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <p className="login__form-title">Рады видеть!</p>
        <fieldset className="login__form-inputs">
          <div className="login__form-container">
            <p className="login__form-input-title">E-mail</p>
            <input
              className="login__form-input"
              type="email"
              name="email"
              value={values.email || ''}
              onChange={handleChange}
              required
            />
            <span className={`login__form-input-error ${isValid.email ? "" : "login__form-input-error_active"}`}>{errorMessage.email}</span>
          </div>
          <div className="login__form-container">
            <p className="login__form-input-title">Пароль</p>
            <input
            className="login__form-input"
            type="password"
            name="password"
            value={values.password || ''}
            onChange={handleChange}
            minLength="3"
            required
          />
            <span className={`login__form-input-error ${isValid.password ? "" : "login__form-input-error_active"}`}>{errorMessage.password}</span>
          </div>
        </fieldset>
        <span className="login__form-button-error login__form-button-error_active">{loginErrorText}</span>
        <button className="login__form-submit" type="submit" disabled={!isValid}>Войти</button>
      </form>
      <p className="login__link-text">Ещё не зарегистрированы?<NavLink to="/register" className="login__link">Регистрация</NavLink></p>
    </div>
  );
}

export default Login;