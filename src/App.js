import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import HomePage from './content/HomePage';
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
            <Route exact path="/" component={HomePage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
