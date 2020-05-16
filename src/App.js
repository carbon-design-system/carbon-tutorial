import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import RepoPage from './components/RepoPage';
import LandingPage from './components/LandingPage';

class App extends Component {
  render() {
    return (
      <TutorialHeader>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
          >
        </Content>
      </TutorialHeader>
    );
  }
}

export default App;
