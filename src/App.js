// import { Button } from 'carbon-components-react';
import React, { Component } from 'react';
// import logo from './logo.svg';
import { Content } from 'carbon-components-react/es/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
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
}

export default App;
