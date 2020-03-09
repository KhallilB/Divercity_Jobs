import axios from 'axios';

class AuthService {
  constructor() {
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  async signUp(username, password, name) {
    await axios
      .post({ username, password, name })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  async logIn(username, password) {
    await axios
      .post({ username, password })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}

export default AuthService;
