import React, { Component } from 'react';
import './app.scss';
import TutorialHeader from './components/TutorialHeader';
// import { Button } from 'carbon-components-react';
// import Button from 'carbon-components-react/lib/components/Button/Button';
import { Content } from 'carbon-components-react/lib/components/UIShell'; //DC: Content is nice. It moves things within it underneath it correctly spacially
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TutorialHeader />
        <Content>
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
