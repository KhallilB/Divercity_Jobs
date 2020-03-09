import axios from 'axios';

export default class JobService {
  constructor() {
    this.getResults = this.getResults.bind(this);
  }

  getResults() {
    return axios
      .get('https://divercity-test.herokuapp.com/jobs')
      .then(res => {
        console.log(res);
        return Promise.resolve(res);
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
}
