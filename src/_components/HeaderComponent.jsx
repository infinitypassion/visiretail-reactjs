import React from 'react';

import { logoImg } from '../_helpers';

import { CartComponent } from './CartComponent';
import { Init as MenuComponentInit, Detail as MenuComponentDetail } from './MenuComponent';
import { NotificationComponent } from './NotificationComponent';
import { ProfileComponent } from './ProfileComponent'

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
                <a href="index.html"><img src={logoImg} className="img-responsive" alt="visiretail" /></a>
              </div>
              <div className="header_right">
                <div className="nav_main">
                  <ul>
                    <CartComponent></CartComponent>

                    {/*<li><a href="#"><div class="basket"><img src="images/ic-basket.svg" alt="basket" class="img-responsive"></div></a></li>*/}
                    <li className="campagne_btn"><a href="launch.html" className="launch_btn">LANCER UNE CAMPAGNE<i className="effect" /></a></li>

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