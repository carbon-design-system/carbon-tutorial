// import React, { Component } from 'react';
// import './app.scss';
// import { Button } from 'carbon-components-react';
import React, { Component } from 'react';
import './app.scss';
// import { Button, Content } from 'carbon-components-react';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* Hello Carbon! Well, not quite yet. This is the starting point for the
//         Carbon tutorial. */}
//        {/* <Button>Button</Button> */}
//       </div>
//     );
//   }
// }
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
        </Content>
      </>
    );
  }
}

export default App;
