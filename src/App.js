import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import { Route, Switch } from 'react-router-dom';
//import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route excat path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
