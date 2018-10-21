import React from 'react';

import { menu } from '../../../_helpers/main';

class Init extends React.Component {
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
      <li className="menu">
        <a href="javascript:void(0)" className="hamburger_menu" onClick={menu.bind(this)}>Menu
          <div className="res_navigation">
            <div className="nav-toggle" id="trigger-overlay">
              <span className="top" />
              <span className="middle" />
              <span className="bottom" />
            </div>
          </div>
        </a>
      </li>
    );
  }
}

export { Init }; 