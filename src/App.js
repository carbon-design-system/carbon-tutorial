import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
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
          <Button>Hello</Button>
        </Content>
      </>
    );
  }
}

export default App;
