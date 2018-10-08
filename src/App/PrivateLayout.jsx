import React from 'react';
import { Route } from 'react-router-dom';

import { HeaderComponent, FooterComponent } from '../_components';
import { HomePage } from '../HomePage';
import { CampaignsPage } from '../CampaignsPage';

class PrivateLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <div>
          <Route path='/app/home' component={HomePage} />
          <Route path='/app/campaignes' component={CampaignsPage} />
        </div>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { PrivateLayout }; 