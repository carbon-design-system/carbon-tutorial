import React, { Component } from 'react';
import './app.scss';
import { Content, Theme } from '@carbon/react';
import HeaderTest from './components/headertest';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import RepoPage from './pages/RepoPage';

class App extends Component {
  render() {
    return (
      <div>
        <Theme theme="g100">
          <HeaderTest />
        </Theme>
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
