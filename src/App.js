import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/es/components/UIShell';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { LandingPage, RepoPage } from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <TutorialHeader />
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
