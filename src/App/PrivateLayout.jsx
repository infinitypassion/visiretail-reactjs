import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HeaderComponent, FooterComponent } from '../_components';

import { HomePage } from '../HomePage';
import { CampaignsPage, CampaignDetailPage } from '../CampaignsPage';
import { ConversionsPage } from '../ConversionsPage';
import { SMSCampaignPage, SMSCampaignCreditPage, SMSCampaignAddCreditPage, SMSCampaignPackPage } from '../SMSCampaignPage';
import { PaymentPage } from '../PaymentPage';
import { LaunchPage, LaunchDetails } from '../LaunchPage';
import { NetworkOverviewPage } from '../NetworkOverviewPage';
import { MapOverviewPage } from '../MapOverviewPage';
import { CartPage } from '../CartPage';

class PrivateLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <Route path='/app/home' component={HomePage} />
          <Route path='/app/campaigns' component={CampaignsPage} />
          <Route path='/app/campaignDetails' component={CampaignDetailPage} />
          <Route path='/app/conversions' component={ConversionsPage} />
          <Route path='/app/smsCampaign' component={SMSCampaignPage} />
          <Route path='/app/smsCampaignCredit' component={SMSCampaignCreditPage} />
          <Route path='/app/smsAddCampaignCredit' component={SMSCampaignAddCreditPage} />
          <Route path='/app/smsCampaignPack' component={SMSCampaignPackPage} />
          <Route path='/app/payment' component={PaymentPage} />
          <Route path='/app/launch' component={LaunchPage} />
          <Route path='/app/launchDetails' component={LaunchDetails} />
          <Route path='/app/networkOverview' component={NetworkOverviewPage} />
          <Route path='/app/mapOverview' component={MapOverviewPage} />
          <Route path='/app/cart' component={CartPage} />
        </Switch>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { PrivateLayout }; 
