import React from 'react';
import { Route } from 'react-router-dom';

import { HeaderComponent, FooterComponent } from '../_components';
import { HomePage } from '../HomePage';
import { CampaignsPage } from '../CampaignsPage';
import { SMSCampaignPage, SMSCampaignCreditPage, SMSCampaignAddCreditPage, SMSCampaignPackPage } from '../SMSCampaignPage';

class PrivateLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>

        <Route path='/app/home' component={HomePage} />
        <Route path='/app/campaignes' component={CampaignsPage} />
        <Route path='/app/smsCampaign' component={SMSCampaignPage} />
        <Route path='/app/smsCampaignCredit' component={SMSCampaignCreditPage} />
        <Route path='/app/smsAddCampaignCredit' component={SMSCampaignAddCreditPage} />
        <Route path='/app/smsCampaignPack' component={SMSCampaignPackPage} />

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { PrivateLayout }; 