import axios from 'axios';

class AuthService {
  constructor() {
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  //   Registers a user
  signUp(username, password, name) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'https://divercity-test.herokuapp.com/register',
          { username, password, name }
        )
        .then(async res => {
          if (res.status === 200) {
            console.log('Results: ', res);
            let token = this.createToken();
            this.setToken(token);

            resolve(res.status);
          }

          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  //   Logs a user in
  async logIn(username, password) {
    await axios.post('');
  }

  //   Creates Token
  createToken() {
    return Math.random()
      .toString(36)
      .replace('0.', '');
  }

  //  Put token in localstorage
  setToken(token) {
    localStorage.setItem('nl_token', token);
  }

  //   Get token from localstorage
  getToken() {
    return localStorage.getItem('nl_token');
  }

  //   Check if token is still in local storage
  loggedIn() {
    const token = this.getToken();
    if (token === null) {
      return false;
    } else if (token) {
      return true;
    }
  }
}

export default AuthService;
