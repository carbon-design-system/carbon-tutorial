import React, { Component } from 'react';

import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './Components/TutorialHeader/TutorialHeader';

import { Route, Switch } from 'react-router-dom';
import LandingPage from './Content/LandingPage/LandingPage';
import RepoPage from './Content/RepoPage/RepoPage';

/* Styles */
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
