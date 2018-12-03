import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { campaignsFakeData } from '../_helpers/fake-data';

import { CampaignItems } from './CampaignItems';

class CampaignsPage extends React.Component {
  constructor() {
    super();

    // Load fake data
    this.state = campaignsFakeData;

    this.campaginState = 'en-cours';
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main section mes_campagnes">
          <div className="main_wraper">
            <div className="container">
              <TabContainer id="my-campaigns-tab-container" defaultActiveKey={this.campaginState}>
                <div>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <h1>Mes Campagnes</h1>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <div className="conversions_tab">
                        <Nav className="nav-tabs">
                          <NavItem eventKey="en-cours">en cours</NavItem>
                          <NavItem eventKey="venir">à venir</NavItem>
                          <NavItem eventKey="passees">passées</NavItem>
                        </Nav>
                      </div>
                    </div>
                  </div>
                  <div className="mescampagn_wraper">
                    <TabContent>
                      <TabPane eventKey="en-cours">
                        <MediaQuery query="(min-device-width: 768px)">
                          <div className="campagne_desktop">
                            <CampaignItems campaigns={this.state.campaigns.inProgress} isMobile={false} />
                          </div>
                        </MediaQuery>
                        <MediaQuery query="(max-device-width: 767px)">
                          <div className="campagne_mobile">
                            <CampaignItems campaigns={this.state.campaigns.inProgress} isMobile={true} />
                          </div>
                        </MediaQuery>
                      </TabPane>
                      <TabPane eventKey="venir">
                        <MediaQuery query="(min-device-width: 768px)">
                          <div className="campagne_desktop">
                            <CampaignItems campaigns={this.state.campaigns.future} isMobile={false} />
                          </div>
                        </MediaQuery>
                        <MediaQuery query="(max-device-width: 767px)">
                          <div className="campagne_mobile">
                            <CampaignItems campaigns={this.state.campaigns.future} isMobile={true} />
                          </div>
                        </MediaQuery>
                      </TabPane>
                      <TabPane eventKey="passees">
                        <MediaQuery query="(min-device-width: 768px)">
                          <div className="campagne_desktop">
                            <CampaignItems campaigns={this.state.campaigns.past} isMobile={false} />
                          </div>
                        </MediaQuery>
                        <MediaQuery query="(max-device-width: 767px)">
                          <div className="campagne_mobile">
                            <CampaignItems campaigns={this.state.campaigns.past} isMobile={true} />
                          </div>
                        </MediaQuery>
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </TabContainer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { CampaignsPage }; 
