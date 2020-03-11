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
  logIn(username, password) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'https://divercity-test.herokuapp.com/login',
          { username, password }
        )
        .then(async res => {
          if (res.status === 200) {
            let token = res.data.token;
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

  // Removes token from localstorage
  logout() {
    localStorage.removeItem('nl_token');
  }
}

export default AuthService;
