import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell/Content';
import TutorialHeader from './components/TutorialHeader';
import { Router, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Router exact path="/" component={LandingPage} />
            <Router path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
