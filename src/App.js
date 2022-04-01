import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Login32, Add16 } from '@carbon/icons-react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          {/*           <Button kind="danger" renderIcon={Login32}> Button</Button> 
          <br></br>
           
          <br></br>
          <Button>Button1</Button>

          <button> name
      <Add16 aria-label="Add" className="my-custom-class" /> name
    </button> */}

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
