import React from 'react';
import MediaQuery from 'react-responsive';

import { homeCampaignSalesTopFakeData } from '../_helpers/fake-data';

import { SalesTopPointItem } from './SalesTopPointItem';

class SalesTopPointComponent extends React.Component {
  constructor() {
    super();
    this.homeCampaignSalesTopFakeData = homeCampaignSalesTopFakeData;
    this.state = {
      currentTopPointSalePointId: -1
    }
    this.updateCurrentTopPointSalePointId = this.updateCurrentTopPointSalePointId.bind(this);
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  updateCurrentTopPointSalePointId(event) {
    this.setState({ currentTopPointSalePointId: event.props.campaignSale.id })
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="top_point section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <div className="title">
                <h6>TOP POINTS DE VENTE</h6>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12 left_con">
              <p>LE TOP permet de révéler vos points de vente les plus performants sur la période séléctionnée. Cette performance est évaluée selon le nombre clics et le budget dépensé sur vos campagnes.</p>
            </div>
            <div className="col-sm-9 col-xs-12 selling_points">
              <div className="selling_list section">
                <label>Point de vente le plus performant</label>
                <ul>
                  {
                    this.homeCampaignSalesTopFakeData.campaignSales.map((campaignSale, key) => {
                      return (
                        <li key={key}>
                          <MediaQuery query="(min-device-width: 1224px)">
                            <SalesTopPointItem campaignSale={campaignSale} isMobile={false} />
                          </MediaQuery>
                          <MediaQuery query="(max-device-width: 1224px)">
                            <SalesTopPointItem campaignSale={campaignSale} isMobile={true} currentTopPointSalePointId={this.state.currentTopPointSalePointId} updateCurrentTopPointSalePointId={this.updateCurrentTopPointSalePointId} />
                          </MediaQuery>
                        </li>
                      );
                    })
                  }
                </ul>
                <a href="#" className="more">Voir tous mes points de vente</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { SalesTopPointComponent }; 