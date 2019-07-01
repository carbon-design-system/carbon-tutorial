import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import Login from './content/Login/Login';
import fakeAuth from './services/fakeAuth';

function PrivatePage({ component: Component, ...otherprops }) {
  console.log('PrivatePage', otherprops.location, Component);
  return (
    <Route
      {...otherprops}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PrivatePage path="/repos" component={RepoPage} />
            <Route path="/login" component={Login} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
