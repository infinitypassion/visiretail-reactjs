import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';

import { PublicLayout } from './PublicLayout';
import { PrivateLayout } from './PrivateLayout';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path='/' component={PublicLayout} />
          <Route path='/app' component={PrivateLayout} />
        </div>
      </Router>
    );
  }
}

export { App }; 