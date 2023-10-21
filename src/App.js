import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Theme theme="g100">
            <TutorialHeader />
          </Theme>
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/repos" component={RepoPage} />
            </Switch>
          </Content>
        </Router>
      </>
    );
  }
}

export default App;
