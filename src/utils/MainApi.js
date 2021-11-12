class MainApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  

}

const mainApi = new MainApi({
  baseUrl: 'https://api.prna.nomoredomains.monster',
});

export default mainApi;