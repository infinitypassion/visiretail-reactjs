import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

import { tableauDeBordImg, mesPointsDeVenteImg, mesCampagnesImg, facturationImg } from '../../../_helpers';
import { closeElement } from '../../../_helpers/main';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.toggleMesPointMenu = this.toggleMesPointMenu.bind(this);
    this.toggleMesCampaignMenu = this.toggleMesCampaignMenu.bind(this);
    if (this.props.isMobile) {
      this.state = { mesPointMenuCollapse: false, mesCampaignMenuCollapse: false };
    } else {
      this.state = { mesPointMenuCollapse: true, mesCampaignMenuCollapse: true };
    }
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggleMesPointMenu(e) {
    e.stopPropagation();
    if (this.props.isMobile) {
      this.setState({ mesPointMenuCollapse: !this.state.mesPointMenuCollapse, mesCampaignMenuCollapse: false });
    }
  }

  toggleMesCampaignMenu(e) {
    e.stopPropagation();
    if (this.props.isMobile) {
      this.setState({ mesPointMenuCollapse: false, mesCampaignMenuCollapse: !this.state.mesCampaignMenuCollapse });
    }
  }
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
                  <div id="menu-mes-point" onClick={this.toggleMesPointMenu}>
                    <div className="menu_img"><img src={mesPointsDeVenteImg} alt="mes points de vente" className="img-responsive" /></div>
                    <a href="#">mes points de vente</a>
                    <span></span>
                  </div>
                  <Collapse in={this.state.mesPointMenuCollapse}>
                    <ul className="has_sub">
                      <li><Link to="/app/networkOverview" onClick={closeElement.bind(this)}>Vue d’ensemble du réseau</Link></li>
                      <li><Link to="/app/pointSaleDetails" onClick={closeElement.bind(this)}>Détail par point de vente</Link></li>
                    </ul>
                  </Collapse>
                </div>
              </li>
              <li>
                <div className="menu_con">
                  <div id="menu-mes-campaign-point" onClick={this.toggleMesCampaignMenu}>
                    <div className="menu_img"><img src={mesCampagnesImg} alt="mes-campagnes" className="img-responsive" /></div>
                    <Link to="/app/campaigns" onClick={closeElement.bind(this)}>mes campagnes</Link>
                    <span></span>
                  </div>
                  <Collapse in={this.state.mesCampaignMenuCollapse}>
                    <ul className="has_sub">
                      <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Camapagnes en cours</Link></li>
                      <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Campagnes à venir</Link></li>
                      <li><Link to="/app/campaigns" onClick={closeElement.bind(this)}>Campagnes terminées</Link></li>
                      <li><Link to="/app/conversions" onClick={closeElement.bind(this)}>Mes conversions</Link></li>
                    </ul>
                  </Collapse>
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
