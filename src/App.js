import React, { Component } from 'react';
import './App.scss';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/tutorialHeader/index';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/landingPage/index';
import RepoPage from './content/repoPage/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </div>
    );
  }
}

export default App;
