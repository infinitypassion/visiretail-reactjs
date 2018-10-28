import React from 'react';
import { Link } from 'react-router-dom';

import { logoImg } from '../_helpers';

class RegisterPage extends React.Component {
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
          <span>J’ai déjà un compte sur Visiretail</span>
          <Link to="/login" className="btn-primary login">Connexion</Link>
        </div>
        <div className="registration_con">
          <span className="logo"><img src={logoImg} className="img-responsive" alt="visiretail" /> </span>
          <h1>Programmez une démonstration avec l’un de nos experts dédié</h1>
          <div className="form_main">
            <form action={`${VISI_BASE_URL}` + "thanks"}>
              <div className="form_raw">
                <div className="form_col">
                  <label>Nom*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form_col">
                  <label>Prénom*</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
              <div className="form_raw">
                <div className="form_col">
                  <label>Société</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form_col">
                  <label>Téléphone*</label>
                  <input type="number" className="form-control" required />
                </div>
              </div>
              <div className="form_raw">
                <label>E-mail* </label>
                <input type="email" className="form-control" required />
              </div>
              <div className="form_raw">
                <label>Votre message*</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <button className="btn-primary">demander une démo</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export { RegisterPage }; 
