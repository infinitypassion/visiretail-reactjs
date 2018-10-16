import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

import { paymentOptionImg, festivitiesImg, laSemaineImg } from '../_helpers';


class PaymentPage extends React.Component {
  constructor() {
    super();

    this.handlePanelSelect = this.handlePanelSelect.bind(this);
    this.state = {
      activePanelKey: 'collapseOne'
    };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  handlePanelSelect(activePanelKey) {
    this.setState({ activePanelKey });
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main section">
          <div className="main_wraper payment">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <div className="payment_top section">
                    <div className="payment_l">
                      <label>Total</label>
                      <span className="value">1 205,00€ HT</span>
                    </div>
                    <div className="payment_r pull-right">
                      <button className="btn-primary">CONTINUER</button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-8 col-xs-12 payment_con">
                  <h1>Etape 2 - Choix du moyen de paiement</h1>
                  <p>Vous pouvez payer par carte dès maintenant ou par chèque en différé</p>
                  <div className="payment_wrap section">
                    <div className="payment_option">
                      <label>
                        <input name="payment" defaultChecked type="radio" />
                        <span className="ckeckname">Carte de crédit / Carte de débit </span>
                        <span className="checkmark" />
                        <span className="payment_img"><img src={paymentOptionImg} alt="payment" className="img-responsive" /></span>
                      </label>
                    </div>
                    <div className="payment_option">
                      <label>
                        <input name="payment" defaultChecked type="radio" />
                        <span className="ckeckname">Chèque</span>
                        <span className="checkmark" />
                      </label>
                    </div>
                    <a href="#" className="btn-primary">payer 1446,00€</a>
                  </div>
                </div>
                <div className="col-sm-4 col-xs-12 payment_main">
                  <div className="credit_summery">
                    <div className="summery_head">
                      <h5>Récapitulatif</h5>
                      <a href="#" className="purple">Modifier</a>
                    </div>

                    <PanelGroup accordion id="accordion" activeKey={this.state.activePanelKey} onSelect={this.handlePanelSelect}>
                      <Panel eventKey="collapseOne">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            <div className="item_summery">
                              <div className="item_avtar">
                                <img src={festivitiesImg} alt="festivities" className="img-responsive" />
                              </div>
                              <div className="item_det">
                                <p>Fêtes de fin d’année 2018 Noël et Nouvel An</p>
                                <span>385,00€</span>
                              </div>
                            </div>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p>Surpression locale en visibilité internet sur la thématique de Noël et Nouvel An. Un kit de bannières, une page d’aterissage, une rédaction de contenu. </p>
                          <div className="summery_list section">
                            <ul>
                              <li><label>Destinataires</label><p>Voltaire, Mérignac, Prado, Moi </p></li>
                              <li><label>Type</label><p>Préstation ponctuelle</p></li>
                              <li><label>Période)</label><p>du 18-01-2018 au 16-02-2018</p></li>
                            </ul>
                          </div>
                        </Panel.Body>
                      </Panel>
                      <Panel eventKey="collapseTow">
                        <Panel.Heading>
                          <Panel.Title toggle>
                            <div className="item_avtar">
                              <img src={laSemaineImg} alt="La-semaine" className="img-responsive" />
                            </div>
                            <div className="item_det">
                              <p>La semaine du goût</p>
                              <span>385,00€</span>
                            </div>
                          </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>
                          <p>Surpression locale en visibilité internet sur la thématique de Noël et Nouvel An. Un kit de bannières, une page d’aterissage, une rédaction de contenu. </p>
                          <div className="summery_list section">
                            <ul>
                              <li><label>Destinataires</label><p>Voltaire, Mérignac, Prado, Moi </p></li>
                              <li><label>Type</label><p>Préstation ponctuelle</p></li>
                              <li><label>Période)</label><p>du 18-01-2018 au 16-02-2018</p></li>
                            </ul>
                          </div>
                        </Panel.Body>
                      </Panel>
                    </PanelGroup>

                    <div className="total_summry">
                      <div className="summery_list section">
                        <ul>
                          <li><label>Sous-Total</label><p>1 205,00€</p></li>
                          <li><label>TVA (20%)</label><p>241,00€</p></li>
                        </ul>
                      </div>
                      <div className="summery_list section">
                        <ul>
                          <li><label>Total</label><p>1446,00€</p></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { PaymentPage }; 