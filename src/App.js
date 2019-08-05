import './app.scss';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';

import TutorialHeader from './components/TutorialHeader';

import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
