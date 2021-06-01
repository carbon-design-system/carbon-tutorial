import React from 'react';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';

import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

export default function App() {
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
