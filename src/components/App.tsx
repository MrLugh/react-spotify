import React from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import Dummy from './Dummy';

class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <Switch>
          <DefaultLayout exact path="/" component={Dummy} />
          <DefaultLayout exact path="/artists" component={Dummy} />
          <DefaultLayout exact path="/songs" component={Dummy} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;