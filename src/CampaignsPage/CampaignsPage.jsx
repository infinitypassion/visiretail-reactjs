import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';

import { campaignesFakeData } from '../_helpers/fake-data';

import { CampaignPage } from './CampaignPage';

class CampaignsPage extends React.Component {
  constructor() {
    super();

    this.state = campaignesFakeData;
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main section">
          <div className="main_wraper">
            <div className="container">
              <TabContainer id="my-campaigns-tab-container" defaultActiveKey="en-cours">
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
                        {
                          this.state.campaignes.inProgress.map((campagin, key) => {
                            return (
                              <CampaignPage key={key} campagin={campagin} />
                            );
                          })
                        }
                      </TabPane>
                      <TabPane eventKey="venir">
                        {
                          this.state.campaignes.future.map((campagin, key) => {
                            return (
                              <CampaignPage key={key} campagin={campagin} />
                            );
                          })
                        }
                      </TabPane>
                      <TabPane eventKey="passees">
                        {
                          this.state.campaignes.past.map((campagin, key) => {
                            return (
                              <CampaignPage key={key} campagin={campagin} />
                            );
                          })
                        }
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