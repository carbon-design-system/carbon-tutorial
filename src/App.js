import React, { Component } from 'react';
import { Button } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Content } from 'carbon-components-react/es/components/UIShell';
import './app.scss';
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

          <Button>Button</Button>
        </Content>
      </>
    );
  }
}

export default App;
