import axios from 'axios';
import AuthService from './AuthService';
class JobService {
  constructor() {
    this.applyToJob = this.applyToJob.bind(this);
    this.Auth = new AuthService();
  }

  //   Wasn't given  token to pass into
  headers = {
    'Content-Type': 'application/json',
    Authorization: ''
  };

  applyToJob(motivation, coverLetter) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'https://divercity-test.herokuapp.com/jobs/2/apply',
          { motivation, coverLetter },
          { headers: this.headers }
        )
        .then(async res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
}

export default JobService;
