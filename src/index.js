import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/repos" component={RepoPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
