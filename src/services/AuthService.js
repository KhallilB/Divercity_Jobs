import axios from 'axios';

class AuthService {
  constructor() {
    this.signUp = this.signUp.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  async signUp(username, password, name) {
    await axios
      .post(
        'https://divercity-test.herokuapp.com/register',
        { username, password, name }
      )
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

  async logIn(username, password) {}
}

export default AuthService;
