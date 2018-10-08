import React from 'react';
import { Route } from 'react-router-dom';

import { LoginPage } from '../LoginPage';

class PublicLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Route path='/login' component={LoginPage} />
      </div>
    );
  }
}

export { PublicLayout }; 