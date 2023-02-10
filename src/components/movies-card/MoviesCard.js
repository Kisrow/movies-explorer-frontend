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
      >
      </video>
      <button className="movies-card__button-save-movie">Сохранить</button>
    </div>
  )
}

export default MoviesCard;