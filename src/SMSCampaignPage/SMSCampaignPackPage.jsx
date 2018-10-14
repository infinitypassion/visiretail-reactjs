import React from 'react';

class SMSCampaignPackPage extends React.Component {
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
          <div className="main_wraper">
            <div className="container">
              <div className="row">
                <div className="col-sm-9 col-xs-12">
                  <h1>Programmez votre campagne SMS  2/2</h1>
                  <p>Consommez vos unités pour l’envoi d'un ou plusieurs messages, comme bon vous semble… dans la limite des unités disponibles.</p>
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="sms_credit">
                    <span>Crédit</span>
                    <span className="credit">3000 <sup>SMS</sup></span>
                  </div>
                </div>
              </div>
              <div className="packwrap section">
                <div className="pack_main">
                  <div className="credit_left">
                    <div className="smstitle">
                      <h5>PROMOTION LUNETTES</h5>
                      <span className="value">10 850 SMS</span>
                    </div>
                    <div className="credit_raw">
                      <div className="credit_list">
                        <ul>
                          <li>Solde disponible<span>3000 SMS</span></li>
                          <li className="green">Crédit à utiliser<span>3000 SMS</span></li>
                        </ul>
                        <div className="credit_box">
                          <h5>7850 crédits manquants</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pack_list">
                    <div className="pack_box">
                      <div className="pack_l">
                        <div className="pack_name">
                          <h5>cette campagne</h5>
                        </div>
                        <div className="no_sms green">7850</div>
                      </div>
                      <div className="pack_r">
                        <div className="pack_price">
                          <h4>1750,00€ HT</h4>
                          <span>0,23€/SMS HT</span>
                        </div>
                        <a href="#">AJOUTER</a>
                      </div>
                    </div>
                    <div className="pack_box">
                      <div className="pack_l">
                        <div className="pack_name">
                          <h5>Pack start</h5>
                        </div>
                        <div className="no_sms">1500</div>
                      </div>
                      <div className="pack_r">
                        <div className="pack_price">
                          <h4>375,00€ HT</h4>
                          <span>0,25€/SMS HT</span>
                        </div>
                        <a href="#">AJOUTER</a>
                      </div>
                    </div>
                    <div className="pack_box">
                      <div className="pack_l">
                        <div className="pack_name">
                          <h5>Pack boost</h5>
                        </div>
                        <div className="no_sms">5000</div>
                      </div>
                      <div className="pack_r">
                        <div className="pack_price">
                          <h4>1150,00€ HT</h4>
                          <span>0,23€/SMS HT</span>
                        </div>
                        <a href="#">AJOUTER</a>
                      </div>
                    </div>
                    <div className="pack_box">
                      <div className="pack_l">
                        <div className="pack_name">
                          <span className="recommend">Recommandé</span>
                          <h5>Pack premium</h5>
                        </div>
                        <div className="no_sms">10000</div>
                      </div>
                      <div className="pack_r">
                        <div className="pack_price">
                          <h4>2000,00€ HT</h4>
                          <span>0,23€/SMS HT</span>
                        </div>
                        <a href="#">AJOUTER</a>
                      </div>
                    </div>
                    <div className="pack_box">
                      <div className="pack_l">
                        <div className="pack_name">
                          <h5>Pack business</h5>
                        </div>
                        <div className="no_sms">50000</div>
                      </div>
                      <div className="pack_r">
                        <div className="pack_price">
                          <h4>9000,00€ HT</h4>
                          <span>0,18€/SMS HT</span>
                        </div>
                        <a href="#">AJOUTER</a>
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

export { SMSCampaignPackPage }; 