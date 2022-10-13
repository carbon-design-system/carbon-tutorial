import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import { Switch, Route } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
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
