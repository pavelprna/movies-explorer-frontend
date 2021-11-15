import Api from "./Api";

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
  
}

const mainApi = new MainApi({
  baseUrl: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

export default mainApi;