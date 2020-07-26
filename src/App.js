import React, { Component } from 'react';

import TutorialHeader from './components/TutorialHeader';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';
class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </>
    );
  }
}

export default App;
