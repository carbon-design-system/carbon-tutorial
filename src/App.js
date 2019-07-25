import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';

import { Content } from 'carbon-components-react/lib/components/UIShell';

import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route component={LandingPage} exact path="/" />
            <Route component={RepoPage} path="/repos" />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
