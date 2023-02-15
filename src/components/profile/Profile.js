function Profile() {
  return (
    <div className="profile">
      <form className="profile__form-container">
        <p className="profile__form-title">Привет, Виталий</p>
        <fieldset className="profile__inputs-container">
          <div className="profile__input-container">
            <input className="profile__input" placeholder="Имя"></input>
            <p className="profile__input-text">Виталий</p>
          </div>
          <div className="profile__input-container">
            <input className="profile__input" placeholder="E-mail"></input>
            <p className="profile__input-text">pochta@yandex.ru</p>
          </div>
        </fieldset>
        <button className="profile__form-submit">Редактировать</button>
      </form>
      <button className="profile__signout">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;