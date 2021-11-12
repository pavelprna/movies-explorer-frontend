class MoviesApi {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  _request({path, method, body}) {
    return fetch(this._baseUrl + path, {
      method,
      headers: this._headers,
      body,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}: ${res.message}`);
    });
  }
  
  getMovies() {
    return this._request({
      path: '/',
      method: 'GET'
    })
  }
}


const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

export default moviesApi;