//
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Header from './components/TutorialHeader/TutorialHeader';
//
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
//
class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
