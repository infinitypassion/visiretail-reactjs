import React from 'react';
import { PanelGroup, Panel, Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter, Button } from 'react-bootstrap';
import StickyBox from 'react-sticky-box';

import { festivitiesImg, icGoogleImg, icBingImg, icYahooImg, icSMSImg, icWazeImg, icDisplayImg, icRemarketingImg, rentreeScolaireImg, saintValentinImg, laSemaineImg, icUserImg, icSubtractImg, lemondeImg, leboncoinImg, youTubeLogoImg, logo20MinutesBleucertisImg, cdiscountImg, banner1Img, banner2Img, banner3Img, banner4Img } from '../_helpers'

class LaunchDetails extends React.Component {
  constructor() {
    super();

    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.state = {
      activePanelKey: '',
      modalShow: false
    };
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    // TODO - Need to convert into react
    $(document).ready(function () {
      $('#camain-action').hide();
      $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
          $('#camain-action').fadeIn('slow');
        }
        else {
          $('#camain-action').fadeOut('slow');
        }
      });
    });
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  handlePanelSelect(activePanelKey) {
    this.setState({ activePanelKey: activePanelKey, modalShow: this.state.modalShow });
  }

  handleModalClose() {
    this.setState({ modalShow: false, activePanelKey: this.state.activePanelKey });
  }

  handleModalShow() {
    this.setState({ modalShow: true, activePanelKey: this.state.activePanelKey });
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="main section">
            <div className="launch_campaign section">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-xs-12">
                    <span>Lancer une campagne</span>
                    <h1>Lancer une campagne</h1>
                    <div className="description_box">
                      <div className="row">
                        <div className="col-sm-12 col-xs-12">
                          <button id="demo-btn" style={{ float: 'left', marginTop: '-80px' }} className="btn-primary">Demo Button for jquery</button>
                        </div>
                        <div className="col-sm-3 col-xs-12 campain_left lefttSidebar">
                          {/* TODO - Need to fix sticky issue while scroll */}
                          <StickyBox offsetTop={20} offsetBottom={20}>
                            <div className="campain_det">
                              <span className="cate popular">populaire</span>
                              <div className="imgwrap">
                                <img src={festivitiesImg} alt="#" className="img-responsive" />
                              </div>
                              <div className="campain_moblie section">
                                <h2>Fête de fin d’année</h2>
                                <span className="price purple">299,00€ TTC</span>
                                <ul className="social_list">
                                  <li className="checked"><span className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></span></li>
                                  <li className="checked"><span className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></span></li>
                                  <li className="checked"><span className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></span></li>
                                  <li><span className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></span></li>
                                  <li className="checked"><span className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></span></li>
                                  <li><span className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></span></li>
                                  <li><span className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></span></li>
                                </ul>
                                <span className="date">18/01/18 - 16/02/18</span>
                              </div>
                              <ul>
                                <li><span><img src={icUserImg} className="img-responsive" alt="user" /></span>87% des franchisés ont lancé la campagne</li>
                                <li><span><img src={icSubtractImg} className="img-responsive" alt="subtract" /></span>Il vous reste 6 jours pour profiter de cette campagne</li>
                              </ul>
                              <div className="camain_action" id="camain-action">
                                <a href="#" className="btn-primary">Acheter maintenant</a>
                                <a href="#" className="btn-primary default">Ajouter au panier</a>
                              </div>
                            </div>
                          </StickyBox>
                        </div>
                        <div className="col-sm-9 col-xs-12 campain_right">
                          <div className="campain_des">
                            <h6>préstation ponctuelle</h6>
                            <h2>Fêtes de fin d’année 2018</h2>
                            <span className="date">18/01/18 - 16/02/18</span>
                            <p>Cette campagne est complémentaire de la campagne fil rouge. Surpression locale en visibilité internet sur la thématique de Noël et Nouvel An. Mise en avant de la promotion Noël dans les annonces et les bannières. Durée de la Prestation 15 jours avant le 25 décembre, avec accélération de la visibilité jusqu'au jour J.</p>
                          </div>
                          <div className="camain_action">
                            <a href="#" className="btn-primary">Acheter maintenant</a>
                            <a href="#" className="btn-primary default">Ajouter au panier</a>
                            <span className="price">299,00€ TTC</span>
                          </div>
                          <div className="progress_raw">
                            <ul className="social_list">
                              <li className="checked"><a href="#" target="_blank" className="support_ico"><img src={icGoogleImg} alt="google" className="img-responsive" /></a>
                                <span>Google</span>
                              </li>
                              <li className="checked"><a href="#" target="_blank" className="support_ico"><img src={icBingImg} alt="bing" className="img-responsive" /></a><span>Bing</span></li>
                              <li className="checked"><a href="#" target="_blank" className="support_ico"><img src={icYahooImg} alt="yahoo" className="img-responsive" /></a><span>Yahoo!</span></li>
                              <li><a href="#" target="_blank" className="support_ico"><img src={icSMSImg} alt="sms" className="img-responsive" /></a><span>Sms</span></li>
                              <li className="checked"><a href="#" target="_blank" className="support_ico"><img src={icWazeImg} alt="waze" className="img-responsive" /></a><span>Waze</span></li>
                              <li><a href="#" target="_blank" className="support_ico"><img src={icDisplayImg} alt="display" className="img-responsive" /></a><span>Display</span></li>
                              <li><a href="#" target="_blank" className="support_ico"><img src={icRemarketingImg} alt="remarketing" className="img-responsive" /></a><span>Remarketing</span></li>
                            </ul>
                            <a href="javascript:void(0)" data-toggle="modal" onClick={this.handleModalShow} className="all_media"> Tout savoir sur ces leviers et supports de diffusion ?</a>
                          </div>
                          <div className="campaign_raw broadcast_campaign">
                            <h6>Quelques sites sur lesquels cette campagne sera diffusée</h6>
                            <ul>
                              <li><a href="#" target="_blank"><img src={lemondeImg} alt="lemonde" className="img-responsive" /></a></li>
                              <li><a href="#" target="_blank"><img src={leboncoinImg} alt="Leboncoin" className="img-responsive" /></a></li>
                              <li><a href="#" target="_blank"><img src={youTubeLogoImg} alt="YouTube" className="img-responsive" /></a></li>
                              <li><a href="#" target="_blank"><img src={logo20MinutesBleucertisImg} alt="20minutes-bleucertis" className="img-responsive" /></a></li>
                              <li><a href="#" target="_blank"><img src={cdiscountImg} alt="cdiscount" className="img-responsive" /></a></li>
                            </ul>
                          </div>
                          <div className="campaign_raw">
                            <h6>Cette campagne comprend</h6>
                            <span className="no_element">3 éléments</span>
                            <PanelGroup accordion id="accordion" activeKey={this.state.activePanelKey} onSelect={this.handlePanelSelect}>
                              <Panel eventKey="collapseOne">
                                <Panel.Heading>
                                  <Panel.Title toggle>
                                    Un kit de 4 bannières display<span />
                                  </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere sollicitudin pharetra. Mauris augue erat, efficitur et volutpat ac, sagittis id nibh. Integer quis erat iaculis, viverra sem at, posuere lorem. </p>
                                  <div className="banner_con">
                                    <div className="baaner_type">
                                      <h6>Pavé</h6>
                                      <p>300x250</p>
                                      <img src={banner1Img} alt="#" className="img-responsive" />
                                    </div>
                                    <div className="baaner_type">
                                      <h6>Skyscraper</h6>
                                      <p>120x600</p>
                                      <img src={banner2Img} alt="#" className="img-responsive" />
                                    </div>
                                    <div className="baaner_type">
                                      <h6>Mégaskycraper</h6>
                                      <p>160x600</p>
                                      <img src={banner3Img} alt="#" className="img-responsive" />
                                    </div>
                                    <div className="baaner_type">
                                      <h6>Mégaskycraper</h6>
                                      <p>160x600</p>
                                      <img src={banner4Img} alt="#" className="img-responsive" />
                                    </div>
                                  </div>
                                </Panel.Body>
                              </Panel>
                              <Panel eventKey="collapsetwo">
                                <Panel.Heading>
                                  <Panel.Title toggle>
                                    Une page d’atterissage<span />
                                  </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere sollicitudin pharetra. Mauris augue erat, efficitur et volutpat ac, sagittis id nibh. Integer quis erat iaculis, viverra sem at, posuere lorem. </p>
                                </Panel.Body>
                              </Panel>
                              <Panel eventKey="collapsethree">
                                <Panel.Heading>
                                  <Panel.Title toggle>
                                    Une rédaction de contenuUne rédaction de contenu<span />                                  </Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere sollicitudin pharetra. Mauris augue erat, efficitur et volutpat ac, sagittis id nibh. Integer quis erat iaculis, viverra sem at, posuere lorem. </p>
                                </Panel.Body>
                              </Panel>
                            </PanelGroup>
                          </div>
                          <div className="campaign_raw">
                            <h6>Les franchisés ont également lancé ces campagnes</h6>
                            <div className="franchi_campaign">
                              <ul>
                                <li>
                                  <div className="imgwrap"><img src={saintValentinImg} alt="Saint-Valentin" className="img-responsive" /></div>
                                  <div className="textwrap">
                                    <h6>Saint-Valentin</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="franchi_raw">
                                    <p className="day_camp"><span>Il vous reste 6 jours</span> pour profiter de cette campagne</p>
                                  </div>
                                  <div className="franchi_raw camaign_per"><span>67%</span></div>
                                  <div className="franchi_raw camaign_price"><span className="price">349,00€ TTC</span></div>
                                </li>
                                <li>
                                  <div className="imgwrap"><img src={rentreeScolaireImg} alt="Rentrée" className="img-responsive" /></div>
                                  <div className="textwrap">
                                    <h6>Rentrée scolaire</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="franchi_raw cap_cate">
                                    <span className="cate">nouveau</span>
                                  </div>
                                  <div className="franchi_raw camaign_per"><span>59%</span></div>
                                  <div className="franchi_raw camaign_price"><span className="price">279,00€ TTC</span></div>
                                </li>
                                <li>
                                  <div className="imgwrap"><img src={laSemaineImg} alt="La-semaine" className="img-responsive" /></div>
                                  <div className="textwrap">
                                    <h6>La semaine du goût</h6>
                                    <span className="date">18/01/18 - 16/02/18</span>
                                  </div>
                                  <div className="franchi_raw cap_cate">
                                    <span className="cate popular">POPULAIRE</span>
                                  </div>
                                  <div className="franchi_raw camaign_per"><span>59%</span></div>
                                  <div className="franchi_raw camaign_price"><span className="price">329,00€ TTC</span></div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
          <ModalHeader closeButton>
            <ModalTitle>Modal Header</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <p>Some text in the modal.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.handleModalClose}>Close</Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export { LaunchDetails }; 