import './app.scss';
import { Theme, Content } from '@carbon/react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import React, { Component } from 'react';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Theme theme="g100">
          <TutorialHeader />
        </Theme>
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </BrowserRouter>
    );
  }
}

export default App;
