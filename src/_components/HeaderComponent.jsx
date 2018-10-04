import React from 'react';

import { logoImg, digitalisesImg, campagnesImg, medal1Img, medal1kImg, medalImg, fbProfileImg, tableauDeBordImg, mesPointsDeVenteImg, mesCampagnesImg, facturationImg } from '../_helpers';

import { CartComponent } from './CartComponent';

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
  }
  // End -- React lifecycle methods

  // Render
  render() {
    return (
      <header>
        <div id="header" className="affix-top header" data-spy="affix" data-offset-top={5}>
          <div className="header_top section">
            <div className="container">
              <div className="logo">
                <a href="index.html"><img src={logoImg} className="img-responsive" alt="visiretail" /></a>
              </div>
              <div className="header_right">
                <div className="nav_main">
                  <ul>
                    <CartComponent></CartComponent>
                    {/*<li><a href="#"><div class="basket"><img src="images/ic-basket.svg" alt="basket" class="img-responsive"></div></a></li>*/}
                    <li className="campagne_btn"><a href="launch.html" className="launch_btn">LANCER UNE CAMPAGNE<i className="effect" /></a></li>
                    <li className="menu"><a href="javascript:void(0)" onClick="menu(event)">Menu
                        <div className="res_navigation">
                        <div className="nav-toggle" id="trigger-overlay">
                          <span className="top" />
                          <span className="middle" />
                          <span className="bottom" />
                        </div>
                      </div>
                    </a>
                    </li>
                    <li className="notification" id="notification"><a href="javascript:void(0)" onClick="sidebar(event)">Notifications <span className="noof_noti">3</span></a>
                      <div className="sidebar">
                        <div className="notification_main">
                          <div className="noti_top">
                            <div className="noti_head">
                              <h4>Notifications <span className="noof_noti">3</span></h4>
                              <span className="close_noti" onClick="close_sidebar()" />
                            </div>
                            <div className="campaigns_con">
                              <ul>
                                <li>
                                  <span className="campaigns_ico"><img src={digitalisesImg} className="img-responsive" alt="digitalisés" /></span>
                                  <h6>Points de vente <br />digitalisés</h6>
                                  <div className="progress_main">
                                    <span>260/358</span>
                                    <div className="progress">
                                      <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }}>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <span className="campaigns_ico"><img src={campagnesImg} className="img-responsive" alt="Campagnes" /></span>
                                  <h6>Campagnes lancées</h6>
                                  <span>Objectif : 3000</span>
                                  <div className="medal_list">
                                    <ul>
                                      <li><img src={medal1Img} alt="medal" className="img-responsive" /></li>
                                      <li><img src={medal1kImg} alt="medal" className="img-responsive" /></li>
                                      <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                                      <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                                      <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="notification_list">
                            <h6>Aujourd’hui</h6>
                            <ul>
                              <li className="today"><p><a href="#">Visiperf Paris Gobelins</a> a lancé la campagne <a href="#">Toussaint</a></p>
                                <span className="time">21:30</span>
                              </li>
                              <li className="today"><p><a href="#">Visiperf Aéroport Charles de Gaulle</a> a lancé la campagne <a href="#">Soldes d’hiver 2018</a></p>
                                <span className="time">20:04</span>
                              </li>
                              <li className="today"><p><a href="#">Visiperf Mérignac</a> a lancé la campagne <a href="#">Soldes d’hiver 2018</a></p>
                                <span className="time">21:15</span>
                              </li>
                              <li><p>Vous avez eu <a href="#">20 conversions</a> sur la camagne<a href="#">Toussaint</a></p>
                                <span className="time">18:48</span>
                              </li>
                            </ul>
                            <h6>Hier</h6>
                            <ul>
                              <li><p><a href="#">Vous avez eu 48 conversions</a> sur la camagne <a href="#">Soldes d’hiver 2018</a></p>
                                <span className="time">18:48</span>
                              </li>
                              <li><p>	<a href="#">Vous avez eu 24 conversions</a> sur la camagne <a href="#">Toussaint</a></p>
                                <span className="time">18:48</span>
                              </li>
                            </ul>
                          </div>
                          <a href="#" className="activity_btn">
                            <span>Voir toute l’activité de mes points de vente </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="profile"><a href="javascript:void(0)" onClick="oprofile(event)"><span className="user_avtar"><img src={fbProfileImg} alt="#" className="img-responsive" /></span></a>
                      <div className="prfile_wrap" id="user_profile">
                        <ul>
                          <li className="pers_info"><a href="#">Personnal information</a></li>
                          <li className="logout"><a href="#">Log out</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger" id="hamburger">
          <div className="container">
            <div className="menu_main section">
              <ul>
                <li>
                  <div className="menu_con">
                    <span><img src={tableauDeBordImg} alt="tableau-de-bord" className="img-responsive" /></span>
                    <a href="#">tableau de bord</a>
                  </div>
                </li>
                <li>
                  <div className="menu_con">
                    <span><img src={mesPointsDeVenteImg} alt="mes points de vente" className="img-responsive" /></span>
                    <a href="#">mes points de vente</a>
                    <ul className="has_sub">
                      <li><a href="network-overview.html">Vue d’ensemble du réseau</a></li>
                      <li><a href="point-sale-details.html">Détail par point de vente</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu_con">
                    <span><img src={mesCampagnesImg} alt="mes-campagnes" className="img-responsive" /></span>
                    <a href="#">mes campagnes</a>
                    <ul className="has_sub">
                      <li><a href="mes-campagnes.html">Camapagnes en cours</a></li>
                      <li><a href="#">Campagnes à venir</a></li>
                      <li><a href="#">Campagnes terminées</a></li>
                      <li><a href="mes-conversions.html">Mes conversions</a></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="menu_con">
                    <span><img src={facturationImg} alt="facturation" className="img-responsive" /></span>
                    <a href="#">facturation</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export { HeaderComponent }; 