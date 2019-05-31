import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
