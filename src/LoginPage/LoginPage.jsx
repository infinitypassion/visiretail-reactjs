import React from 'react';
import { Link } from 'react-router-dom';

import { logoImg } from '../_helpers';

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
      <div className="col-sm-5 col-xs-12 registration_main">
        <div className="registration_head">
          <span>Vous souhaitez tester notre plateforme ?</span>
          <Link to="/register" className="btn-primary login">Demander une démo</Link>
        </div>
        <div className="registration_con">
          <span className="logo"><img src={logoImg} className="img-responsive" alt="visiretail" /> </span>
          <h1>Simplifiez le déploiement de votre marketing digital</h1>
          <div className="form_main">
            <form action={`${VISI_BASE_URL}` + "app/home"}>
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
    );
  }
}

export { LoginPage }; 
