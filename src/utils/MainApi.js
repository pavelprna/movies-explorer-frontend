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

  updateUser({ name, email, password }) {
    return this._request({
      method: 'PUTCH',
      path: '/users/me',
      body: { name, email, password },
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
  
}

const mainApi = new MainApi({
  baseUrl: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

export default mainApi;