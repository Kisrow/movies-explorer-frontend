function Profile() {
  return (
    <div className="profile">
      <form className="profile__form-container">
        <p className="profile__form-title">Привет, Виталий(из контекста)</p>
        <fieldset className="profile__inputs-container">
          <label className="profile__input-container">
            <input className="profile__input" placeholder="Имя"></input>
            <p className="profile__input-text">Имя(из контекста)</p>
          </label>
          <label className="profile__input-container">
            <input className="profile__input" placeholder="E-mail"></input>
            <p className="profile__input-text">E-mail(из контекста)</p>
          </label>
        </fieldset>
        <button className="profile__form-submit">Редактировать</button>
      </form>
      <button className="profile__signout">Выйти из аккаунта</button>
    </div>
  )
}

export default Profile;