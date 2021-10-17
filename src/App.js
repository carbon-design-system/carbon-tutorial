import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';

import TutorialHeader from './TutorialHeader/TutorialHeader';
import LandingPage from './content/LandingPage/LandingPage';
import RepoPage from './content/RepoPage/RepoPage';

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
