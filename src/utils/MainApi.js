import { OWN_API_URL, OWN_API_HEADERS } from './config';

class SavedMoviesApi {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _chekResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((err) => {
          return Promise.reject(err);
      });
  }

  getAllSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(this._chekResponse);
  }
  
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(this._chekResponse);
  }
  
  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })
    .then(this._chekResponse);
  }

  login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      })
    })
    .then(this._chekResponse);
  }
  
  logOut() {
    return fetch(`${this._url}/signout`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    })
    .then(this._chekResponse);
  }

  saveMovie(movie) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    })
    .then(this._chekResponse);
  }

  deleteMovie(idMovie) {
    return fetch(`${this._url}/movies/${idMovie}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    })
    .then(this._chekResponse);
  }

  updateUserDate(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name,
        email,
      })
    })
    .then(this._chekResponse);
  }
  
}

export const savedMoviesApi = new SavedMoviesApi({
  url: OWN_API_URL,
  headers: OWN_API_HEADERS,
});