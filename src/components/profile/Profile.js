import { useContext, useState } from 'react';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({
  logOut,
  updateUserDate,
}) {
  const currentUser = useContext(CurrentUserContext);

  const [profileName, setProfileName] = useState('');
  const [profileEmail, setProfileEmail] = useState('');

  function handleChangeProfileName(e) {
    setProfileName(e.target.value);
  };

  function handleChangeProfileEmail(e) {
    setProfileEmail(e.target.value);
  };

  function onSubmit(e) {
    e.preventDefault();

    updateUserDate(profileName, profileEmail);
  }

  return (
    <div className="profile">
      <form className="profile__form-container" onSubmit={onSubmit}>
        <p className="profile__form-title">{`Привет, ${currentUser.name}`}</p>
        <fieldset className="profile__inputs-container">
          <div className="profile__input-container">
            <input className="profile__input" placeholder="Имя" onChange={handleChangeProfileName}></input>
            <p className="profile__input-text">{currentUser.name}</p>
          </div>
          <div className="profile__input-container">
            <input className="profile__input" placeholder="E-mail" onChange={handleChangeProfileEmail}></input>
            <p className="profile__input-text">{currentUser.email}</p>
          </div>
        </fieldset>
        <button className="profile__form-submit" type="submit">Редактировать</button>
      </form>
      <button className="profile__signout" onClick={logOut}>Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;