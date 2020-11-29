import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/repos">
              <RepoPage />
            </Route>
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
