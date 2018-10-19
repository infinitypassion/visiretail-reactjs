import React from 'react';
import { Link } from 'react-router-dom';

import { logoImg } from '../../_helpers';

import { CartComponent } from './CartComponent';
import { Init as MenuComponentInit, Detail as MenuComponentDetail } from './MenuComponent';
import { NotificationComponent } from './NotificationComponent';
import { ProfileComponent } from './ProfileComponent';

// TODO - Need to work on mobile view
class HeaderComponent extends React.Component {
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
      <header>
        <div id="header" className="affix-top header" data-spy="affix" data-offset-top={5}>
          <div className="header_top section">
            <div className="container">
              <div className="logo">
                <Link to="/app/home"><img src={logoImg} className="img-responsive" alt="visiretail" /></Link>
              </div>
              <div className="header_right">
                <div className="nav_main">
                  <ul>
                    <CartComponent></CartComponent>

                    {/* TODO - <li><a href="#"><div class="basket"><img src="images/ic-basket.svg" alt="basket" class="img-responsive"></div></a></li>*/}
                    <li className="campagne_btn"><Link to="/app/launch" className="launch_btn">LANCER UNE CAMPAGNE<i className="effect" /></Link></li>

                    <MenuComponentInit></MenuComponentInit>

                    <NotificationComponent></NotificationComponent>

                    <ProfileComponent></ProfileComponent>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MenuComponentDetail></MenuComponentDetail>

      </header>
    );
  }
}

export { HeaderComponent }; 