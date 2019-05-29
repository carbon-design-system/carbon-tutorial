import React, { Component } from 'react';
import './app.scss';
import Button from 'carbon-components-react/lib/components/Button/Button';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import TertiaryPage from './content/TertiaryPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/tertiary" component={TertiaryPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
