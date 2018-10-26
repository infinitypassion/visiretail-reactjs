import React from 'react';
import { ProgressBar } from 'react-bootstrap';

import { icGoogleImg, icFacebookImg, icImpressionsImg, icClicsImg, icConversionsImg, icEuroImg } from '../_helpers';

class GraphSectionComponent extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="campagne_wraper" id="campagne_wraper">
        <div className="container">
          <div className="campagne_main rentree">
            <div className="ovelay_main section">
              <div className="campagne_top section">
                <div className="ovelay_left">
                  <h6>préstation ponctuelle</h6>
                  <h2>Rentrée scolaire</h2>
                  <div className="progress_main blue">
                    <h6>Avancée</h6>
                    <ProgressBar now={70} />
                    <span>70%</span>
                  </div>
                  <div className="progress_main">
                    <h6>PDV ACTIFS</h6>
                    <ProgressBar now={97} />
                    <span>218/224</span>
                  </div>
                </div>
                <div className="ovelay_right">
                  <div className="social_data">
                    <div className="progress_main google">
                      <h6>12 876,00€</h6>
                      <ProgressBar now={63} label="63%" />
                      <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                    </div>
                    <div className="progress_main facebook">
                      <h6>3 158,00€</h6>
                      <ProgressBar now={27} label="27%" />
                      <span className="ico"><img src={icFacebookImg} alt="facebook" className="img-responsive" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay_list">
                <ul>
                  <li>
                    <span className="ico"><img src={icImpressionsImg} alt="impressions" className="img-responsive" /></span>
                    <span className="value">187 987</span>
                    <h6>impressions</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                    <span className="value">13 504</span>
                    <h6>clics</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                    <span className="value">89</span>
                    <h6>conversions</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                    <span className="value">16 034,00€</span>
                    <h6>budget dépensé</h6>
                  </li>
                  <li>
                    <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                    <span className="value">1,2974€</span>
                    <h6>coût du clic</h6>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { GraphSectionComponent }; 