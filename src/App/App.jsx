import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../_helpers';

import { LoginPage } from '../LoginPage';
import { HomePage } from '../HomePage';
import { CampaignsPage } from '../CampaignsPage';

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
          <Route path='/campaignes' component={CampaignsPage} />
        </div>
      </Router>
    );
  }
}

export { App }; 