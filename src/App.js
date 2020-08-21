import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './Components/TutorialHeader';
import LandingPage from './Content/LandingPage';
import RepoPage from './Content/RepoPage';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
        <Content>{/* <Button>Button</Button> */}</Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/repos" component={RepoPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
