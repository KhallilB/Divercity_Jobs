import axios from 'axios';
class JobService {
  constructor() {
    this.applyToJob = this.applyToJob.bind(this);
  }

  // Create headers object that puts token in headers
  headers = {
    'Content-Type': 'application/json',
    Authorization: this.getToken().toString()
  };

  // Get the current token
  getToken() {
    return localStorage.getItem('nl_token');
  }

  applyToJob(motivation, cover_letter) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          'https://divercity-test.herokuapp.com/jobs/2/apply',
          { motivation, cover_letter },
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
