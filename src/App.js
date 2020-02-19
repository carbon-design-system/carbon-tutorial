import './app.scss';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/repos" component={RepoPage} />
      </Switch>
    );
  }
}

export default App;
