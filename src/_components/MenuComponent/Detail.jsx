import React from 'react';
import { Link } from 'react-router-dom';

import { tableauDeBordImg, mesPointsDeVenteImg, mesCampagnesImg, facturationImg } from '../../_helpers';
import { closeElement } from '../../_helpers/main';

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
                  <Link to="/app/campaigns" onClick={closeElement.bind(this)}>mes campagnes</Link>
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
                  <span><img src={facturationImg} alt="facturation" className="img-responsive" /></span>
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
