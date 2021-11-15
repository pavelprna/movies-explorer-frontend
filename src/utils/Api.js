export default class Api {
  constructor({ baseUrl, headers, credentials }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._credentials = credentials;
  }

  _request({ path, method, body }) {
    return fetch(this._baseUrl + path, {
      method,
      headers: this._headers,
      body: JSON.stringify(body),
      credentials: this._credentials,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}: ${res.message}`);
    });
  }
}
