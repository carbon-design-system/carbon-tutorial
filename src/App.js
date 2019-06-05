import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell'; //DC: Content is nice. It moves things within it underneath it correctly spacially
// import Button from 'carbon-components-react/lib/components/Button/Button';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TutorialHeader />
        <Content>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
          <Button>Button</Button>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </React.Fragment>
    );
  }
}

export default App;
