import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content } from 'carbon-components-react/lib/components/UIShell';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/LandingPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </React.Fragment>
    );
  }
}

export default App;
