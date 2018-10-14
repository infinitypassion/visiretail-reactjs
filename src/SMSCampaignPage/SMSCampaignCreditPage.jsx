import React from 'react';

class SMSCampaignCreditPage extends React.Component {
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
                </div>
                <div className="col-sm-3 col-xs-12">
                  <div className="sms_credit">
                    <span>Crédit</span>
                    <span className="credit">4985 <sup>SMS</sup></span>
                  </div>
                </div>
              </div>
              <div className="creditwrap section">
                <div className="credit_left">
                  <div className="smstitle">
                    <h5>PROMOTION LUNETTES</h5>
                    <span className="value">3850 SMS</span>
                  </div>
                  <div className="credit_raw">
                    <div className="credit_list">
                      <ul>
                        <li>Solde disponible<span>4985 SMS</span></li>
                        <li className="green">Crédit à utiliser<span>3850 SMS</span></li>
                        <li>Frais<span>0,00€ TTC</span></li>
                      </ul>
                    </div>
                  </div>
                  <div className="credit_raw last">
                    <div className="credit_list">
                      <ul>
                        <li>Crédit restant après l’achat<span>150 SMS</span></li>
                      </ul>
                    </div>
                  </div>
                  <p>Le fait que vous continuiez à utiliser le Service et/ou le Logiciel à l'expiration du délai susmentionné ou votre acceptation explicite manifestée en cliquant sur «Lancer ma campagne» matérialiseront votre acceptation d'être tenu par les clauses des Conditions Générales d'Utilisation modifiées. </p>
                  <div className="schedule_action">
                    <a href="#" className="btn-primary">Annuler</a>
                    <button disabled className="btn-primary green pull-right">Lancer ma campagne</button>
                  </div>
                </div>
                <div className="credit_summery">
                  <div className="summery_head">
                    <h5>Récapitulatif</h5>
                    <a href="#" className="green">Modifier</a>
                  </div>
                  <div className="summery_list section">
                    <ul>
                      <li><label>Sexe</label><p>Hommes et Femmes</p></li>
                      <li><label>Age</label><p>18-48 ans</p></li>
                      <li><label>Localisation(s)</label><p>Autour de moi</p></li>
                      <li><label>Proximité</label><p>15km</p></li>
                      <li><label>Date d’envoi</label><p>05/07/2018 à 9h00</p></li>
                      <li><label>Message</label><p>N’oubliez pas la 2ème démarque ! -20% supplémentaires sur une séléction d’articles en magasin ou sur visiperf.com du 05/07 au 07/08</p></li>
                      <li><label>Nom de l’expéditeur</label><p>Visiperf</p></li>
                      <li><label>Volume</label><p>3850 sms</p></li>
                    </ul>
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

export { SMSCampaignCreditPage }; 