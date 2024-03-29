import Api from "./Api";
import { API_URL } from "./constants";

class MainApi extends Api {
  constructor({ baseUrl, headers, credentials }) {
    super({ baseUrl, headers, credentials })
  }

  createUser({ name, email, password }) {
    return this._request({
      method: 'POST',
      path: '/signup',
      body: { name, email, password }
    });
  }

  updateUser({ name, email }) {
    return this._request({
      method: 'PATCH',
      path: '/users/me',
      body: { name, email },
    })
  }

  getUser() {
    return this._request({
      method: 'GET',
      path: '/users/me',
    })
  }

  signIn({ email, password }) {
    return this._request({
      method: 'POST',
      path: '/signin',
      body: { email, password }
    });
  }

  signOut() {
    return this._request({
      method: 'POST',
      path: '/signout',
    })
  }
  
  getMovies() {
    return this._request({
      method: 'GET',
      path: '/movies',
    })
  }

  saveMovie(movie) {
    return this._request({
      method: 'POST',
      path: '/movies',
      body: movie,
    })
  }

  removeMovie(id) {
    return this._request({
      method: 'DELETE',
      path: `/movies/${id}`
    })
  }
}

const mainApi = new MainApi({
  baseUrl: API_URL || 'http://locallhost:3010',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

export default mainApi;