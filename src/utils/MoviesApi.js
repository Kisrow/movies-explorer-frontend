import { ADDITIONAL_URL } from './config';

class MoviesApi {
  constructor({url}) {
    this._url = ADDITIONAL_URL;
  }

  _chekResponse(res) {
    if (res.ok) {
      return res.json();
    } else
    return Promise.reject(res);
  }
  
  getAllMovies() {
    return fetch(this._url, {
  
    })
    .then(this._chekResponse)
  }
}

export const moviesApi = new MoviesApi({
  url: ADDITIONAL_URL,
});