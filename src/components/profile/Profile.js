import { useContext, useEffect } from 'react';

import { CurrentUserContext } from '../../context/CurrentUserContext';
import { useFormValidation } from '../../utils/useFormValidation';
import { REG_EXP_EMAIL } from '../../utils/config';

function Profile({
  logOut,
  updateUserDate,
  profileErrorText,
  setProfileErrorText,
  isErrorUpdateUserDate,
  isSuccessUpdateUserDate,
  setErrorUpdateUserDate,
  setSuccessUpdateUserDate,
}) {
  const currentUser = useContext(CurrentUserContext);
  const  {values, errorMessage, isValid, handleChange } = useFormValidation();
  const isValidName = values.name ? values.name === currentUser.name : values.name === undefined;
  const isValidEmail = values.email ? values.email === currentUser.email : values.email === undefined;

  useEffect(() => {
    setProfileErrorText('');
  }, [])

  function onSubmit(e) {
    e.preventDefault();

    updateUserDate(values.name || currentUser.name, values.email || currentUser.email);

    setTimeout(() => {
      setErrorUpdateUserDate(false);
      setSuccessUpdateUserDate(false);
      console.log("d")
    }, 5000);
  }

  return (
    <div className="profile">
      <form className="profile__form-container" onSubmit={onSubmit} noValidate>
        <p className="profile__form-title">{`Привет, ${currentUser.name}!`}</p>
        <fieldset className="profile__inputs-container">
          <span className="profile__form-input-error profile__form-input-error_active">{errorMessage.name}</span>
          <div className="profile__input-container">
            <input
              className="profile__input"
              type="text" 
              placeholder="Имя"
              name="name" 
              defaultValue={currentUser.name || ""}
              onChange={handleChange}
              minLength="2"
              required
            />
            <p className="profile__input-text">{currentUser.name}</p>
          </div>
          <span className="profile__form-input-error profile__form-input-error_active">{errorMessage.email}</span>
          <div className="profile__input-container">
            <input
              className="profile__input"
              type="email"
              placeholder="E-mail"
              name="email"
              defaultValue={currentUser.email || ""}
              onChange={handleChange}
              pattern={REG_EXP_EMAIL}
              required
            />
            <p className="profile__input-text">{currentUser.email}</p>
          </div>
        </fieldset>
        <span className={`profile__form-button ${
          isErrorUpdateUserDate || isSuccessUpdateUserDate ?
          isSuccessUpdateUserDate ?
          "profile__form-button_type_success" :
          "profile__form-button_type_error" :
          ""
          }`}>{
            isErrorUpdateUserDate || isSuccessUpdateUserDate ?
            isErrorUpdateUserDate ?
            profileErrorText :
            "Данные сохранены" :
            ""
            }</span>
        <button className="profile__form-submit" type="submit" disabled={!isValid || (isValidName && isValidEmail)}>Редактировать</button>
      </form>
      <button className="profile__signout" onClick={logOut}>Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;