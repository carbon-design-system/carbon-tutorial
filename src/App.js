import React, { Component } from 'react';
import './app.scss';
import { Route, Router, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';

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
