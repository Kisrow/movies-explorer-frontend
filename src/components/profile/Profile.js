import { useContext, useEffect } from 'react';

import { useFormValidation } from '../../utils/useFormValidation';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({
  logOut,
  updateUserDate,
  profileErrorText,
  setProfileErrorText,
  isErrorUpdateUserDate,
}) {
  const currentUser = useContext(CurrentUserContext);

  const  {values, errorMessage, isValid, formReset, handleChange } = useFormValidation();

  useEffect(() => {
    formReset();
    setProfileErrorText('');
  }, [])

  function onSubmit(e) {
    e.preventDefault();

    updateUserDate(values.name, values.email);
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
              value={values.name || ""}
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
              value={values.email || ""}
              onChange={handleChange}
              required
            />
            <p className="profile__input-text">{currentUser.email}</p>
          </div>
        </fieldset>
        <span className={`register__form-button-error ${isErrorUpdateUserDate ? "register__form-button-error_active" : ""}`}>{profileErrorText}</span>
        <button className="profile__form-submit" type="submit" disabled={!isValid}>Редактировать</button>
      </form>
      <button className="profile__signout" onClick={logOut}>Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;