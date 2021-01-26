import React, { Component } from 'react';
import './app.scss';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
