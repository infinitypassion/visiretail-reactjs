import React from 'react';

import { HeaderComponent, FooterComponent } from '../_components';

import { icGoogleImg, icFacebookImg, icImpressionsImg, icClicsImg, icConversionsImg, icEuroImg } from '../_helpers';

class CampaignsPage extends React.Component {
  constructor() {
    super();
  }

  // Render
  render() {
    return (
      <div>
        <section>
          <HeaderComponent></HeaderComponent>

          <div className="main section">
            <div className="main_wraper">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <h1>Mes Campagnes</h1>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <div className="conversions_tab">
                      <ul className="nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#en-cours">en cours</a></li>
                        <li><a data-toggle="tab" href="#venir">à venir</a></li>
                        <li><a data-toggle="tab" href="#passees">passées</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mescampagn_wraper">
                  <div className="tab-content">
                    <div id="en-cours" className="tab-pane fade in active">
                      <div className="campagne_wraper">
                        <a href="campagnes-details.html">
                          <div className="campagne_main rentree">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>préstation ponctuelle</h6>
                                <h2>Rentrée scolaire</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }}>
                                    </div>
                                  </div>
                                  <span>70%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>12 876,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }}>
                                        <span>63%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>3 158,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '27%' }}>
                                        <span>27%</span>
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
                        </a>
                      </div>
                      <div className="campagne_wraper">
                        <a href="#">
                          <div className="campagne_main toussaint">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>ABONNEMENT</h6>
                                <h2>Toussaint</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '36%' }}>
                                    </div>
                                  </div>
                                  <span>36%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>5 900,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }}>
                                        <span>57%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>4 200,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '57%' }}>
                                        <span>43%</span>
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
                                  <span className="value">67 985</span>
                                  <h6>impressions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                                  <span className="value">6 582</span>
                                  <h6>clics</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                  <span className="value">32</span>
                                  <h6>conversions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">10 100,00€</span>
                                  <h6>budget dépensé</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">1,896€</span>
                                  <h6>coût du clic</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="campagne_wraper">
                        <a href="#">
                          <div className="campagne_main vacances">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>préstation ponctuelle</h6>
                                <h2>Vacances d’été</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '93%' }}>
                                    </div>
                                  </div>
                                  <span>93%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>3 900,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '19%' }}>
                                        <span>19%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>17 200,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '81%' }}>
                                        <span>81%</span>
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
                                  <span className="value">178 985</span>
                                  <h6>impressions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                                  <span className="value">19 876</span>
                                  <h6>clics</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                  <span className="value">547</span>
                                  <h6>conversions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">21 800,00€</span>
                                  <h6>budget dépensé</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">1,896€</span>
                                  <h6>coût du clic</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div id="venir" className="tab-pane fade in">
                      <div className="campagne_wraper">
                        <a href="campagnes-details.html">
                          <div className="campagne_main vacances">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>préstation ponctuelle</h6>
                                <h2>Vacances d’été</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '93%' }}>
                                    </div>
                                  </div>
                                  <span>93%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>3 900,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '19%' }}>
                                        <span>19%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>17 200,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '81%' }}>
                                        <span>81%</span>
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
                                  <span className="value">178 985</span>
                                  <h6>impressions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                                  <span className="value">19 876</span>
                                  <h6>clics</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                  <span className="value">547</span>
                                  <h6>conversions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">21 800,00€</span>
                                  <h6>budget dépensé</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">1,896€</span>
                                  <h6>coût du clic</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div id="passees" className="tab-pane fade in">
                      <div className="campagne_wraper">
                        <a href="#">
                          <div className="campagne_main rentree">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>préstation ponctuelle</h6>
                                <h2>Rentrée scolaire</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }}>
                                    </div>
                                  </div>
                                  <span>70%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>12 876,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }}>
                                        <span>63%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>3 158,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '27%' }}>
                                        <span>27%</span>
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
                        </a>
                      </div>
                      <div className="campagne_wraper">
                        <a href="#">
                          <div className="campagne_main toussaint">
                            <div className="campagne_top section">
                              <div className="ovelay_left">
                                <h6>ABONNEMENT</h6>
                                <h2>Toussaint</h2>
                              </div>
                              <div className="ovelay_center">
                                <div className="progress_main">
                                  <h6>Avancée</h6>
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '36%' }}>
                                    </div>
                                  </div>
                                  <span>36%</span>
                                </div>
                              </div>
                              <div className="ovelay_right">
                                <div className="social_data">
                                  <div className="progress_main google">
                                    <h6>5 900,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '63%' }}>
                                        <span>57%</span>
                                      </div>
                                    </div>
                                    <span className="ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span>
                                  </div>
                                  <div className="progress_main facebook">
                                    <h6>4 200,00€</h6>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '57%' }}>
                                        <span>43%</span>
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
                                  <span className="value">67 985</span>
                                  <h6>impressions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icClicsImg} alt="clics" className="img-responsive" /></span>
                                  <span className="value">6 582</span>
                                  <h6>clics</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icConversionsImg} alt="conversions" className="img-responsive" /></span>
                                  <span className="value">32</span>
                                  <h6>conversions</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">10 100,00€</span>
                                  <h6>budget dépensé</h6>
                                </li>
                                <li>
                                  <span className="ico"><img src={icEuroImg} alt="euro" className="img-responsive" /></span>
                                  <span className="value">1,896€</span>
                                  <h6>coût du clic</h6>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { CampaignsPage }; 