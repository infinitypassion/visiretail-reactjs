import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Table } from 'react-bootstrap';

import { icGoogleImg, icFacebookImg, playButtonImg } from '../_helpers';
import { campaignDetailFakeData } from '../_helpers/fake-data';

import { CampaignDetailItem } from './CampaignDetailItem';

class CampaignDetailPage extends React.Component {
  constructor() {
    super();

    // Load fake data
    this.campaignDetailFakeData = campaignDetailFakeData;

    this.state = {
      currentId: -1
    };
    this.updateCurrentId = this.updateCurrentId.bind(this);
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  updateCurrentId(event) {
    this.setState({ currentId: event.props.campaignDetail.id })
  }
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
                  <h1 className="bread_crumb"><Link to="/app/campaigns">Mes Campagnes</Link><span>{this.campaignDetailFakeData.campaign.campaignName}</span></h1>
                </div>
                <div className="col-sm-6 col-xs-12">
                  <div className="campagne_advance">
                    <div className="progress_main">
                      <h6>Avancée</h6>
                      <ProgressBar now={this.campaignDetailFakeData.campaign.advanced} />
                      <span>{this.campaignDetailFakeData.campaign.advancedStr}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mesdata_list">
                <ul className="purple">
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.activeFranchise}<sup>/{this.campaignDetailFakeData.campaign.totalFranchise}</sup></h2>
                      <h5>franchisés actifs</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.impressions}</h2>
                      <h5>impressions</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.clicks}</h2>
                      <h5>clics</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.conversions}</h2>
                      <h5>conversions</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.google.budget}</h2>
                      <h5>budget google<span><img src={icGoogleImg} className="img-responsive" alt="google" /></span></h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.facebook.budget}</h2>
                      <h5>budget facebook<span><img src={icFacebookImg} className="img-responsive" alt="facebook" /></span></h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.costPerClick}</h2>
                      <h5>coût du clic</h5>
                    </div>
                  </li>
                  <li>
                    <div className="databox">
                      <h2>{this.campaignDetailFakeData.campaign.budgetSpent}</h2>
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
                        this.campaignDetailFakeData.campaign.franchisees.map((f, key) => {
                          return (
                            <CampaignDetailItem campaignDetail={f} isMobile={false} key={key} />
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
                      this.campaignDetailFakeData.campaign.franchisees.map((f, key) => {
                        return (
                          <CampaignDetailItem campaignDetail={f} isMobile={true} currentId={this.state.currentId} updateCurrentId={this.updateCurrentId} key={key} />
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
