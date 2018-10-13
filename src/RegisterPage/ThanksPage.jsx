import React from 'react';

import { logoImg, icSendImg } from '../_helpers';

import { SlidesComponent } from '../_components';

class ThanksPage extends React.Component {
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
        <div className="visiretail_registration section">
          <div className="row">
            <div className="col-sm-5 col-xs-12 registration_main">
              <div className="registration_head">
                <span>J’ai déjà un compte sur Visiretail</span>
                <a href="/register" className="btn-primary login">Connexion</a>
              </div>
              <div className="registration_con">
                <span className="logo"><img src={logoImg} className="img-responsive" alt="visiretail" /> </span>
                <div className="thanks_con">
                  <img src={icSendImg} className="img-responsive send" alt="send" />
                  <p>Votre demande de démo a bien été prise en compte.
                    Un expert prendra contact avec vous sous 24h.</p>
                  <h5>A très vite !</h5>
                  <span>Team </span>
                </div>
              </div>
            </div>
            <SlidesComponent></SlidesComponent>
          </div>
        </div>
      </section>
    );
  }
}

export { ThanksPage }; 