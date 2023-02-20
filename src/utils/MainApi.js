import { OWN_API_URL, OWN_API_HEADERS } from './config';

class SavedMoviesApi {
  constructor({url, headers}) {
    this._url = url;
    this._headers = headers;
  }

  _chekResponse(res) {
    if (res.ok) {
      return res.json();
    } else
    return Promise.reject(res);
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
}

export const savedMoviesApi = new SavedMoviesApi({
  url: "http://localhost:3000",
  headers: OWN_API_HEADERS,
});