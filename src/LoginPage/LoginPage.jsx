import React from 'react';

import { logoImg } from '../_helpers';

import { SlidesComponent } from '../_components';

class LoginPage extends React.Component {
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
          <div className="row login">
            <div className="col-sm-5 col-xs-12 registration_main">
              <div className="registration_head">
                <span>Vous souhaitez tester notre plateforme ?</span>
                <a href="/register" className="btn-primary login">Demander une démo</a>
              </div>
              <div className="registration_con">
                <span className="logo"><img src={logoImg} className="img-responsive" alt="visiretail" /> </span>
                <h1>Simplifiez le déploiement de votre marketing digital</h1>
                <div className="form_main">
                  <form action="/app/home">
                    <div className="form_raw">
                      <label>Username</label>
                      <input type="text" className="form-control" required />
                    </div>
                    <div className="form_raw">
                      <label> Mot de passe</label>
                      <input type="password" className="form-control" required />
                    </div>
                    <button className="btn-primary">connexion</button>
                    <a href="#" className="fogot">Mot de passe oublié ?</a>
                  </form>
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

export { LoginPage }; 