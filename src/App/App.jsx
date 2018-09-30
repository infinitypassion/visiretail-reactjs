import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';

import { LoginPage } from '../LoginPage';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Route path="/" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export { App }; 