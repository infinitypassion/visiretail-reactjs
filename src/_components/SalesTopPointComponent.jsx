import React from 'react';

import { sellPostion1Img, sellPostion2Img, sellPostion3Img } from '../_helpers';

// TODO - pending for review
class SalesTopPointComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      campaignSales: [
        {
          id: 1,
          sellPostionImg: sellPostion1Img,
          agencyName: 'Visiperf Charles de Gaulle',
          campaignName: 'Tremblay-en-France',
          impressions: '1 879 048',
          clicks: '187 964',
          conversions: '1 568',
          budgetSpent: '35 187€',
          costPerClick: '2,87€'
        },
        {
          id: 2,
          sellPostionImg: sellPostion2Img,
          agencyName: 'Visiperf Charles de Gaulle',
          campaignName: 'Tremblay-en-France',
          impressions: '1 879 048',
          clicks: '187 964',
          conversions: '1 568',
          budgetSpent: '35 187€',
          costPerClick: '2,87€'
        },
        {
          id: 3,
          sellPostionImg: sellPostion3Img,
          agencyName: 'Visiperf Marseille Prado',
          campaignName: 'Marseille 13008',
          impressions: '1 879 048',
          clicks: '187 964',
          conversions: '2 487',
          budgetSpent: '35 187€',
          costPerClick: '2,87€'
        },
        {
          id: 4,
          sellPostionNo: 4,
          agencyName: 'Visiperf Merignac',
          campaignName: 'Bordeaux 33700',
          impressions: '1 879 048',
          clicks: '187 964',
          conversions: '1 568',
          budgetSpent: '68 785€',
          costPerClick: '2,87€'
        },
        {
          id: 5,
          sellPostionNo: 5,
          agencyName: 'Visiperf Paris Menilmontant',
          campaignName: 'Paris 75020',
          impressions: '1 879 048',
          clicks: '187 964',
          conversions: '1 568',
          budgetSpent: '35 187€',
          costPerClick: '2,87€'
        }
      ]
    };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
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
                    this.state.campaignSales.map((campaignSale, key) => {
                      return (
                        <li key={key}>
                          <div className="sell_point_raw">
                            <div className="sell_left">
                              <span className="sell_no"><img src={campaignSale.sellPostionImg} className="img-responsive" alt="#" /></span>
                              <div className="sell_des">
                                <h6>{campaignSale.agencyName}</h6>
                                <p>{campaignSale.campaignName}</p>
                              </div>
                            </div>
                            <div className="sell_right">
                              <div className="sell_type">
                                <ul>
                                  <li>
                                    <h6>Impressions</h6>
                                    <p>{campaignSale.impressions}</p>
                                  </li>
                                  <li>
                                    <h6>Clics</h6>
                                    <p>{campaignSale.clicks}</p>
                                  </li>
                                  <li>
                                    <h6>Conversions</h6>
                                    <p>{campaignSale.conversions}</p>
                                  </li>
                                  <li>
                                    <h6>Budget</h6>
                                    <p>{campaignSale.budgetSpent}</p>
                                  </li>
                                  <li>
                                    <h6>Coût du lead</h6>
                                    <p className="green">{campaignSale.costPerClick}</p>
                                  </li>
                                </ul>
                              </div>
                              <a href="#">détails du point de vente</a>
                            </div>
                          </div>
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