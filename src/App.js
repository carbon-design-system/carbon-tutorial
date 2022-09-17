import React, { Component } from 'react';
/*import './app.scss';*/
import { Content, Theme } from '@carbon/react';
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
          <Switch>
            <Route path="/repos" component={RepoPage} />
            <Route exact path="/" component={LandingPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
