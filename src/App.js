import React, { Component } from 'react';
import './app.scss';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader'; // class App extends Component {
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
//   render() {
//     return (
//       // <div>
//       //   Hello Carbon! Well, not quite yet. This is the starting point for the
//       //   Carbon tutorial.
//       // </div>
//       <Button>Button</Button>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          // <Button>Button</Button>
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
