import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';

import { LoginPage } from '../LoginPage';
import { HomePage } from '../HomePage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path='/login' component={LoginPage} />
          <Route path='/home' component={HomePage} />
        </div>
      </Router>
    );
  }
}

export { App }; 