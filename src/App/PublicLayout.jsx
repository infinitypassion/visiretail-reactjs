import React from 'react';
import { Route } from 'react-router-dom';

import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { ThanksPage } from '../RegisterPage';

class PublicLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="LoginWraper">
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/thanks' component={ThanksPage} />
      </div>
    );
  }
}

export { PublicLayout }; 