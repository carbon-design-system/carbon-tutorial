import React, { Component } from 'react';
import './app.scss';
import { Button, Content } from 'carbon-components-react';
import SiteHeader from './components/SiteHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import CharactersPage from './content/CharactersPage';

class App extends Component {
  render() {
    return (
      <>
        <SiteHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/characters" component={CharactersPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
