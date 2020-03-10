import axios from 'axios';
class JobService {
  constructor() {
    this.applyToJob = this.applyToJob.bind(this);
  }

  headers = {
    'Content-Type': 'application/json',
    Authorization: this.getToken().toString()
  };

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
