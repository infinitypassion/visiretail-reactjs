import React from 'react';
import { Link } from 'react-router-dom';

import { festivitiesImg, icClockWhiteImg, icGoogleImg, icBingImg, icYahooImg, icSMSImg, icWazeImg, icDisplayImg, icRemarketingImg, rentreeScolaireImg, saintValentinImg, laSemaineImg, icMsgImg } from '../_helpers';

class LaunchPage extends React.Component {
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
      <section>
        <div className="main section">
          <div className="launch_campaign section">
            <div className="container">
              <h1>Lancer une campagne</h1>
              <div className="row progrss_main">
                <div className="col-sm-12 col-xs-12">
                  <h5>En cours</h5>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <Link to="/app/launchDetails" className="progrss_box campaign latest">
                    <div className="item_type popular">
                      <span className="cate">Populaire</span>
                      <p>Plus que 3 jours pour en profiter !</p>
                    </div>
                    <div className="imgwrap">
                      <img src={festivitiesImg} alt="#" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="offer">
                        <span><img src={icClockWhiteImg} alt="#" className="img-responsive" /></span>
                        <span>Plus que 3 jours pour profiter de cette campagne !</span>
                      </div>
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Fêtes de fin d’année 2018</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">299,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël..</p>
                      </div>
                      <div className="progress_raw">
                        <h6>LEVIERS ET SUPPORTS</h6>
                        <ul className="social_list">
                          <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                        </ul>
                      </div>
                      <div className="progress_raw">
                        <h6>LE PACKS</h6>
                        <ul className="pack_list">
                          <li>Un kit de 4 bannières display</li>
                          <li>Une page d’atterissage</li>
                          <li>Une rédaction de contenu</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social_list mobile">
                      <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                    </ul>
                  </Link>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box campaign latest">
                    <div className="item_type new">
                      <span className="cate">NOUVEAU</span>
                      <p>Plus que 2 jours pour en profiter !</p>
                    </div>
                    <div className="imgwrap">
                      <img src={rentreeScolaireImg} alt="Rentrée-scolaire" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Rentrée scolaire</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">279,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël.. </p>
                      </div>
                      <div className="progress_raw">
                        <h6>LEVIERS ET SUPPORTS</h6>
                        <ul className="social_list">
                          <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                        </ul>
                      </div>
                      <div className="progress_raw">
                        <h6>LE PACKS</h6>
                        <ul className="pack_list">
                          <li>Un kit de 4 bannières display</li>
                          <li>Une page d’atterissage</li>
                          <li>Une rédaction de contenu</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social_list mobile">
                      <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                    </ul>
                  </a>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box campaign">
                    <div className="imgwrap">
                      <img src={saintValentinImg} alt="Saint-Valentin" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="offer">
                        <span><img src={icClockWhiteImg} alt="#" className="img-responsive" /></span>
                        <span>Plus que 2 jours pour profiter de cette campagne !</span>
                      </div>
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Saint-Valentin</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">349,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël..</p>
                      </div>
                      <div className="progress_raw">
                        <h6>LEVIERS ET SUPPORTS</h6>
                        <ul className="social_list">
                          <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                        </ul>
                      </div>
                      <div className="progress_raw">
                        <h6>LE PACKS</h6>
                        <ul className="pack_list">
                          <li>Un kit de 4 bannières display</li>
                          <li>Une page d’atterissage</li>
                          <li>Une rédaction de contenu</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social_list mobile">
                      <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                    </ul>
                  </a>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box campaign">
                    <div className="imgwrap">
                      <img src={laSemaineImg} alt="La-semaine" className="img-responsive" />
                    </div>
                    <div href="#" className="textwrap">
                      <div className="offer">
                        <span><img src={icClockWhiteImg} alt="#" className="img-responsive" /></span>
                        <span>Plus que 3 jours pour profiter de cette campagne !</span>
                      </div>
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>La semaine du goût</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">349,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël..</p>
                      </div>
                      <div className="progress_raw">
                        <h6>LEVIERS ET SUPPORTS</h6>
                        <ul className="social_list">
                          <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                          <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                          <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                        </ul>
                      </div>
                      <div className="progress_raw">
                        <h6>LE PACKS</h6>
                        <ul className="pack_list">
                          <li>Un kit de 4 bannières display</li>
                          <li>Une page d’atterissage</li>
                          <li>Une rédaction de contenu</li>
                        </ul>
                      </div>
                    </div>
                    <ul className="social_list mobile">
                      <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                      <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                      <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                    </ul>
                  </a>
                </div>
              </div>
            </div>
            <div className="sms_head section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3 col-xs-12">
                    <div className="local_ico">
                      <img src={icMsgImg} alt="#" className="img-responsive" />
                      <h5>Le SMS local</h5>
                    </div>
                  </div>
                  <div className="col-sm-7 col-xs-12">
                    <p>Programmez votre campagne SMS dès maintenant</p>
                  </div>
                  <div className="col-sm-2 col-xs-12">
                    <a href="#" className="more_btn" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row progrss_main shortly">
                <div className="col-sm-12 col-xs-12">
                  <h5>Prochainement</h5>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box">
                    <h5>Fête des mères</h5>
                    <div className="imgwrap">
                      <img src={festivitiesImg} alt="#" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Soldes d’hiver 2018</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">459,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël..</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box">
                    <h5>Disponible bientôt</h5>
                    <div className="imgwrap">
                      <img src={rentreeScolaireImg} alt="Rentrée-scolaire" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Fête des mères</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">209,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël.. </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <a href="#" className="progrss_box">
                    <h5>Disponible bientôt</h5>
                    <div className="imgwrap">
                      <img src={saintValentinImg} alt="Saint-Valentin" className="img-responsive" />
                    </div>
                    <div className="textwrap">
                      <div className="campagene_head">
                        <div className="campagene_title">
                          <h6>Lancement du site e-commerce</h6>
                          <span>18/01/18 - 16/02/18</span>
                          <span className="ttc">209,00€ TTC</span>
                        </div>
                        <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël..</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-12 col-xs-12">
                  <p className="btm_text">Si vous souhaitez acheter une campagne SMS , merci de vous rendre sur la version desktop de Visiretail®</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { LaunchPage }; 