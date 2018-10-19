import React from 'react';
import { Route } from 'react-router-dom';

import { SlidesComponent } from '../_components';

import { LoginPage } from '../LoginPage';
import { RegisterPage, ThanksPage } from '../RegisterPage';

class PublicLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="LoginWraper">
        <section>
          <div className="visiretail_registration section">
            <div className="row">
              <Route path='/login' component={LoginPage} />
              <Route path='/register' component={RegisterPage} />
              <Route path='/thanks' component={ThanksPage} />

              {/* TODO - Need to fix issue - It is viisble in http://localhost:8080/app/mapOverview */}
              <SlidesComponent></SlidesComponent>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { PublicLayout }; 