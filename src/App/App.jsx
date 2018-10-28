import React from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';

import { history } from '../_helpers';

import { PublicLayout } from './PublicLayout';
import { PrivateLayout } from './PrivateLayout';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router basename={`${VISI_BASE_URL}`}>
        <div>
          <Switch>
            <Route path='/app' component={PrivateLayout} />
            <Route path='/' component={PublicLayout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App }; 
