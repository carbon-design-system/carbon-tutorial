import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
import LandingPage from './components/LandingPage';
import RepoPage from './components/RepoPage';

import './app.scss';

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
