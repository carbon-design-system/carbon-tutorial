import React, { Component } from 'react';
import './app.scss';
import { Route, Switch } from 'react-router-dom';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Button>Button</Button>
          <Switch>
            {/* show component like below instead of <RepoPage/> */}
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
