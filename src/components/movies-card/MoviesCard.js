function MoviesCard({
  name,
  duration,
  link,
  poster,
}) {
  return (
    <div className="movies-card">
      <div className="movies-card__date">
        <h2 className="movies-card__name">{name}</h2>
        <p className="movies-card__duration">{duration}</p>
      </div>
      <video className="movies-card__movie"
        src={link}
        controls
        preload="none"
        poster={poster}
      />
      <button className="movies-card__button movies-card__button_type_save-movie">Сохранить</button>
    </div>
  );
}

export default MoviesCard;