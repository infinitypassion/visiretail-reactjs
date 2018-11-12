import React from 'react';
import { Link } from 'react-router-dom';

import { tableauDeBordImg, mesPointsDeVenteImg, mesCampagnesImg, facturationImg } from '../../../_helpers';
import { closeElement } from '../../../_helpers/main';

class Detail extends React.Component {
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
      <div className="hamburger" id="hamburger">
        <div className="container">
          <div className="menu_main section">
            <ul>
              <li>
                <div className="menu_con">
                  <div className="menu_img"><img src={tableauDeBordImg} alt="tableau-de-bord" className="img-responsive" /></div >
                  <a href="#">tableau de bord</a>
                </div>
              </li>
              <li>
                <div className="menu_con">
                  <div className="menu_img"><img src={mesPointsDeVenteImg} alt="mes points de vente" className="img-responsive" /></div>
                  <a href="#">mes points de vente</a>
                  <span></span>
                  <ul className="has_sub">
                    <li><Link to="/app/networkOverview" onClick={closeElement.bind(this)}>Vue d’ensemble du réseau</Link></li>
                    <li><Link to="/app/pointSaleDetails" onClick={closeElement.bind(this)}>Détail par point de vente</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="menu_con">
                  <div className="menu_img"><img src={mesCampagnesImg} alt="mes-campagnes" className="img-responsive" /></div>
                  <Link to="/app/campaigns" onClick={closeElement.bind(this)}>mes campagnes</Link>
                  <span></span>
                  <ul className="has_sub">
                    <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Camapagnes en cours</Link></li>
                    <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Campagnes à venir</Link></li>
                    <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Campagnes terminées</Link></li>
                    <li><Link to="/app/conversions" onClick={closeElement.bind(this)}>Mes conversions</Link></li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="menu_con">
                  <div className="menu_img"><img src={facturationImg} alt="facturation" className="img-responsive" /></div>
                  <a href="#">facturation</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export { Detail }; 
