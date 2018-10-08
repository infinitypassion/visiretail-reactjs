import React from 'react';

import { icGoogleImg, icFacebookImg, icImpressionsImg, icClicsImg, icConversionsImg, icEuroImg } from '../_helpers';

class CampaignPage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Render
  render() {
    return (
      <div className="campagne_wraper">
        <a href="campagnes-details.html">
          <div className={this.props.campagin.campagneMainClass}>
            <div className="campagne_top section">
              <div className="ovelay_left">
                <h6>{this.props.campagin.agencyName}</h6>
                <h2>{this.props.campagin.campaignName}</h2>
              </div>
              <div className="ovelay_center">
                <div className="progress_main">
                  <h6>Avancée</h6>
                  <div className="progress">
                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: this.props.campagin.advancedStyleWidth }}>
                    </div>
                  </div>
                  <span>{this.props.campagin.advanced}</span>
                </div>
              </div>
              <div className="ovelay_right">
                <div className="social_data">
                  <div className="progress_main google">
                    <h6>{this.props.campagin.google.budget}</h6>
                    <div className="progress">
                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: this.props.campagin.google.progressStyleWidth }} >
                        <span>{this.props.campagin.google.progress}</span>
                      </div>
                    </div>
                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                  </div>
                  <div className="progress_main facebook">
                    <h6>{this.props.campagin.facebook.budget}</h6>
                    <div className="progress">
                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: this.props.campagin.facebook.progressStyleWidth }}>
                        <span>{this.props.campagin.facebook.progress}</span>
                      </div>
                    </div>
                    <span className="ico"><img src={icFacebookImg} alt="facebook" className="img-responsive" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay_list">
              <ul>
                <li>
                  <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                  <span className="value">{this.props.campagin.impressions}</span>
                  <h6>impressions</h6>
                </li>
                <li>
                  <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                  <span className="value">{this.props.campagin.clicks}</span>
                  <h6>clics</h6>
                </li>
                <li>
                  <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                  <span className="value">{this.props.campagin.conversions}</span>
                  <h6>conversions</h6>
                </li>
                <li>
                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                  <span className="value">{this.props.campagin.budgetSpent}</span>
                  <h6>budget dépensé</h6>
                </li>
                <li>
                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                  <span className="value">{this.props.campagin.costPerClick}</span>
                  <h6>coût du clic</h6>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export { CampaignPage }; 