import React, { Component } from 'react';
import './app.scss';
import { /*Button,*/ Content, Theme } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';

import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          {/* <Button>New Button</Button> */}
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
