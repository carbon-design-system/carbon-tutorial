import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader/TutorialHeader';
import LandingPage from './content/LandingPage/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </HashRouter>
    );
  }
}

export default App;
