import React, { Component } from 'react';
import { Content, Theme } from '@carbon/react';
import TutorialHeader from './components/TutorialHeader';
import './app.scss';
import LandingPage from './contents/LandingPage';
import RepoPage from './contents/RepoPage';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>

      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
};

export default App;
