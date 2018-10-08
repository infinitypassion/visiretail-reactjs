import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';

import { CampaignPage } from './CampaignPage';

class CampaignsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      campaignes: {
        inProgress: [
          {
            campaignId: 1,
            campagneMainClass: 'campagne_main rentree',
            agencyName: 'préstation ponctuelle',
            campaignName: 'Rentrée scolaire',
            advanced: '70%',
            advancedStyleWidth: '73%',
            google: {
              budget: '12 876,00€',
              progress: '63%',
              progressStyleWidth: '63%'
            },
            facebook: {
              budget: '3 158,00€',
              progress: '27%',
              progressStyleWidth: '27%'
            },
            impressions: '187 987',
            clicks: '13 504',
            conversions: '89',
            budgetSpent: '16 034,00€',
            costPerClick: '1,2974€'
          },
          {
            campaignId: 2,
            campagneMainClass: 'campagne_main toussaint',
            agencyName: 'ABONNEMENT',
            campaignName: 'Toussaint',
            advanced: '36%',
            advancedStyleWidth: '36%',
            google: {
              budget: '5 900,00€',
              progress: '57%',
              progressStyleWidth: '63%'
            },
            facebook: {
              budget: '4 200,00€',
              progress: '43%',
              progressStyleWidth: '57%'
            },
            impressions: '67 985',
            clicks: '6 582',
            conversions: '32',
            budgetSpent: '10 100,00€',
            costPerClick: '1,896€'
          },
          {
            campaignId: 3,
            campagneMainClass: 'campagne_main vacances',
            agencyName: 'préstation ponctuelle',
            campaignName: 'Vacances d’été',
            advanced: '93%',
            advancedStyleWidth: '93%',
            google: {
              budget: '3 900,00€',
              progress: '19%',
              progressStyleWidth: '19%'
            },
            facebook: {
              budget: '17 200,00€',
              progress: '81%',
              progressStyleWidth: '81%'
            },
            impressions: '178 985',
            clicks: '19 876',
            conversions: '547',
            budgetSpent: '21 800,00€',
            costPerClick: '1,896€'
          }
        ],
        future: [
          {
            campaignId: 4,
            campagneMainClass: 'campagne_main vacances',
            agencyName: 'préstation ponctuelle',
            campaignName: 'Vacances d’été',
            advanced: '93%',
            advancedStyleWidth: '93%',
            google: {
              budget: '3 900,00€',
              progress: '19%',
              progressStyleWidth: '19%'
            },
            facebook: {
              budget: '17 200,00€',
              progress: '81%',
              progressStyleWidth: '81%'
            },
            impressions: '178 985',
            clicks: '19 876',
            conversions: '547',
            budgetSpent: '21 800,00€',
            costPerClick: '1,896€'
          }
        ],
        past: [
          {
            campaignId: 5,
            campagneMainClass: 'campagne_main rentree',
            agencyName: 'préstation ponctuelle',
            campaignName: 'Rentrée scolaire',
            advanced: '70%',
            advancedStyleWidth: '73%',
            google: {
              budget: '12 876,00€',
              progress: '63%',
              progressStyleWidth: '63%'
            },
            facebook: {
              budget: '3 158,00€',
              progress: '27%',
              progressStyleWidth: '27%'
            },
            impressions: '187 987',
            clicks: '13 504',
            conversions: '89',
            budgetSpent: '16 034,00€',
            costPerClick: '1,2974€'
          },
          {
            campaignId: 6,
            campagneMainClass: 'campagne_main toussaint',
            agencyName: 'ABONNEMENT',
            campaignName: 'Toussaint',
            advanced: '36%',
            advancedStyleWidth: '36%',
            google: {
              budget: '5 900,00€',
              progress: '57%',
              progressStyleWidth: '63%'
            },
            facebook: {
              budget: '4 200,00€',
              progress: '43%',
              progressStyleWidth: '57%'
            },
            impressions: '67 985',
            clicks: '6 582',
            conversions: '32',
            budgetSpent: '10 100,00€',
            costPerClick: '1,896€'
          }
        ]
      }
    };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Render
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export { CampaignsPage }; 