import React from 'react';
import { ProgressBar, Table } from 'react-bootstrap';

import { icGoogleImg, icFacebookImg, playButtonImg } from '../_helpers';
import { campaignDetailFakeData } from '../_helpers/fake-data';

class CampaignDetailPage extends React.Component {
  constructor() {
    super();

    this.state = campaignDetailFakeData;
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
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <h1 className="bread_crumb"><a href="/app/campaigns">Mes Campagnes</a><span>{this.state.campaign.campaignName}</span></h1>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="campagne_advance">
                    <div className="progress_main">
                      <h6>Avancée</h6>
                      <ProgressBar now={this.state.campaign.advanced} />
                      <span>{this.state.campaign.advancedStr}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mesdata_list">
                <ul className="purple">
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.activeFranchise}<sup>/{this.state.campaign.totalFranchise}</sup></h2>
                      <h5>franchisés actifs</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.impressions}</h2>
                      <h5>impressions</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.clicks}</h2>
                      <h5>clics</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.conversions}</h2>
                      <h5>conversions</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.google.budget}</h2>
                      <h5>budget google<span><img src={icGoogleImg} className="img-responsive" alt="google" /></span></h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.facebook.budget}</h2>
                      <h5>budget facebook<span><img src={icFacebookImg} className="img-responsive" alt="facebook" /></span></h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.costPerClick}</h2>
                      <h5>coût du clic</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.state.campaign.budgetSpent}</h2>
                      <h5>total dépensé</h5>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mescon_list">
                <a className="expoter">EXPORTER SUR EXCEL</a>
                <div className="campagne_table section">
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th><button>nom<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th><button>impressions<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th><button>clics<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th><button>conversions<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th><button>budget<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th><button>coût du lead<i><img src={playButtonImg} alt="#" className="img-responsive" /></i></button></th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.campaign.franchisees.map((f, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                {
                                  f.sellPostionImg ?
                                    (<span className="number nbg"><img src={f.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{f.sellPostionNo}</span>)
                                }
                              </td>
                              <td>{f.name}</td>
                              <td>{f.impressions}</td>
                              <td>{f.clicks}</td>
                              <td>{f.conversions}</td>
                              <td>{f.budget}</td>
                              <td>{f.leadCost}</td>
                              <td><a href="#" /></td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </Table>
                </div>
                <div className="selling_list Mobile section">
                  <label>Point de vente le plus performant</label>
                  <ul>
                    {
                      this.state.campaign.franchisees.map((f, key) => {
                        return (
                          <li key={key}>
                            <div className="sell_point_raw">
                              <div className="sell_left">
                                {
                                  f.sellPostionImg ?
                                    (<span className="sell_no"><img src={f.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="sell_no bg">{f.sellPostionNo}</span>)
                                }
                                <div className="sell_des">
                                  <h6>{f.name}</h6>
                                  <span className="mclick">{f.mClicks}</span>
                                </div>
                              </div>
                              <div className="sell_right">
                                <div className="sell_type">
                                  <ul>
                                    <li>
                                      <h6>Impressions</h6>
                                      <p>{f.impressions}</p>
                                    </li>
                                    <li>
                                      <h6>Clics</h6>
                                      <p>{f.clicks}</p>
                                    </li>
                                    <li>
                                      <h6>Conversions</h6>
                                      <p>{f.conversions}</p>
                                    </li>
                                    <li>
                                      <h6>Budget</h6>
                                      <p>{f.budget}</p>
                                    </li>
                                    <li>
                                      <h6>Coût du lead</h6>
                                      <p className="green">{f.leadCost}</p>
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
      </section>
    );
  }
}

export { CampaignDetailPage }; 