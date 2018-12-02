import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

import { icGoogleImg, icFacebookImg, icImpressionsImg, icClicsImg, icConversionsImg, icEuroImg } from '../_helpers';

class CampaignItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: !this.props.isMobile };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.isMobile && nextProps.currentCampaignId > -1 && nextProps.currentCampaignId != this.props.campaign.campaignId) {
      this.setState({ collapse: false });
    }
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggle() {
    if (this.props.isMobile) {
      this.props.updateCurrentCampaignId(this);
      this.setState({ collapse: !this.state.collapse });
    }
  }
  // End -- Custom methods

  // Render
  render() {
    if (!this.props.isMobile) {
      return (
        <div className="campagne_wraper">
          <Link to="/app/campaignDetails">
            <div className={this.props.campaign.campagneMainClass}>
              <div className="campagne_top section">
                <div className="ovelay_left">
                  <h6>{this.props.campaign.agencyName}</h6>
                  <h2>{this.props.campaign.campaignName}</h2>
                </div>
                <div className="ovelay_center">
                  <div className="progress_main">
                    <h6>Avancée</h6>
                    <ProgressBar now={this.props.campaign.advanced} />
                    <span>{this.props.campaign.advancedStr}</span>
                  </div>
                </div>
                <div className="ovelay_right">
                  <div className="social_data">
                    <div className="progress_main google">
                      <h6>{this.props.campaign.google.budget}</h6>
                      <ProgressBar now={this.props.campaign.google.progress} label={this.props.campaign.google.progressStr} />
                      <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                    </div>
                    <div className="progress_main facebook">
                      <h6>{this.props.campaign.facebook.budget}</h6>
                      <ProgressBar now={this.props.campaign.facebook.progress} label={this.props.campaign.facebook.progressStr} />
                      <span className="ico"><img src={icFacebookImg} alt="facebook" className="img-responsive" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay_list">
                <ul>
                  <li>
                    <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                    <span className="value">{this.props.campaign.impressions}</span>
                    <h6>impressions</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                    <span className="value">{this.props.campaign.clicks}</span>
                    <h6>clics</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                    <span className="value">{this.props.campaign.conversions}</span>
                    <h6>conversions</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                    <span className="value">{this.props.campaign.budgetSpent}</span>
                    <h6>budget dépensé</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                    <span className="value">{this.props.campaign.costPerClick}</span>
                    <h6>coût du clic</h6>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="campagne_main">
          <div className="campagne_top section">
            <div className="ovelay_left">
              <h2>{this.props.campaign.campaignName}</h2>
            </div>
            <div className="ovelay_right">
              <span>{this.props.campaign.advancedStr}</span>
              <div className={"progress-circle progress-" + this.props.campaign.advanced}></div>
            </div>
            <div className="ovelay_center">
              <h6>Budget total dépensé <span>{this.props.campaign.budgetSpent}</span></h6>
              <ProgressBar>
                <ProgressBar now={this.props.campaign.google.progress} label={this.props.campaign.google.progressStr} />
                <ProgressBar now={this.props.campaign.facebook.progress} label={this.props.campaign.facebook.progressStr} />
              </ProgressBar>
              <div className="progress_compare">
                <div className="compare left">
                  <h6>{this.props.campaign.google.budget}<span>({this.props.campaign.google.progress})</span></h6>
                </div>
                <div className="compare right">
                  <h6>{this.props.campaign.facebook.budget}<span>({this.props.campaign.facebook.progress})</span></h6>
                </div>
              </div>
            </div>
          </div>
          <div className={this.state.collapse ? "sell_point_raw open selling_list" : "sell_point_raw selling_list"}>
            <div className="sell_left" onClick={this.toggle}>
              <div className="sell_des">
                <h6>performances de la campagne</h6>
                <p>Paris 75020</p>
                <span className="mclick">{this.props.campaign.clicks}</span>
              </div>
            </div>
            <Collapse in={this.state.collapse}>
              <div className="sell_right">
                <div className="sell_type">
                  <ul>
                    <li><h6>Impressions</h6><p>{this.props.campaign.impressions}</p></li>
                    <li><h6>Clics</h6><p>{this.props.campaign.clicks}</p></li>
                    <li><h6>Conversions</h6><p>{this.props.campaign.conversions}</p></li>
                    <li><h6>Budget</h6><p>{this.props.campaign.budgetSpent}</p></li>
                    <li><h6>Coût du lead</h6><p>{this.props.campaign.costPerClick}</p></li>
                  </ul>
                </div><Link to="/app/campaignDetails">détails de la camapgne</Link>
              </div>
            </Collapse>
          </div>
        </div>
      );
    }
  }
}

export { CampaignItem }; 