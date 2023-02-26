import { ADDITIONAL_API_URL } from './config';

class MoviesApi {
  constructor({url}) {
    this._url = url;
  }

  _chekResponse(res) {
    if (res.ok) {
      return res.json();
    } else
    return Promise.reject(res);
  }
  
  getAllMovies() {
    return fetch(this._url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(this._chekResponse)
  }
}

export const moviesApi = new MoviesApi({
  url: ADDITIONAL_API_URL,
});