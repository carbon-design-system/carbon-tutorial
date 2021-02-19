import './app.scss';

import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <Fragment>
        <TutorialHeader />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
