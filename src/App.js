import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TutorialHeader from './components/TutorialHeader';

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
