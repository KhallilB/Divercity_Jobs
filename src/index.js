import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Navbar from './components/Navbar/Navbar';
import * as serviceWorker from './serviceWorker';

import JobPostings from './components/JobPostings/JobPostings';
import ExpandedJobs from './components/JobPostings/ExpandedJobs/ExpandedJobs';
import Apply from './components/Apply/Apply';
import SignUp from './components/Auth/SignUp/SignUp';
import LogIn from './components/Auth/LogIn/LogIn';

import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

const routing = (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/jobs' component={JobPostings} />
      <Route
        exact
        path='/jobs/:id'
        component={ExpandedJobs}
      />
      <Route
        exact
        path='/jobs/:id/apply'
        component={Apply}
      />
      <Route exact path='/auth/signup' component={SignUp} />
      <Route exact path='/auth/login' component={LogIn} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
