import './app.css';

import React, { Component } from 'react';
//import { Button } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <div>
        Hello Carbon! This is the starting point for the Carbon tutorial.
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
