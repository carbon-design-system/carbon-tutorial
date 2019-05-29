import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <main>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
