import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Content } from 'carbon-components-react/lib/components/UIShell';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './components/Content/LandingPage';
import RepoPage from './components/Content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
