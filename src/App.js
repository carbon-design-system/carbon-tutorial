import './app.scss';
import './index.scss';

// NPM COMPONENTS
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

// PAGES
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

// CARBOM COMPONENTS
// import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          {/* <Button>Button</Button> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
