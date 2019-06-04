// JS imports
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

import './app.scss';

class App extends Component {
  render() {
    return (
      //<div>
      //  Hello Carbon! Well, not quite yet. This is the starting point for the
      //  Carbon tutorial.
      //</div>
      <div>
        <TutorialHeader />
        <Content>
          {/*
          <Button href="https://www.ibm.com/">
           a Button
          </Button>
          <Button href="https://www.oracle.com/">
           another Button
          </Button>
          */}
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
