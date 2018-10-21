import React from 'react';

import { fbProfileImg } from '../../_helpers';
import { oprofile } from '../../_helpers/main';

class ProfileComponent extends React.Component {
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
      <li className="profile">
        <a href="javascript:void(0)" onClick={oprofile.bind(this)}>
          <span className="user_avtar"><img src={fbProfileImg} alt="#" className="img-responsive" /></span>
        </a>
        <div className="prfile_wrap" id="user_profile">
          <ul>
            <li className="pers_info"><a href="#">Personnal information</a></li>
            <li className="logout"><a href="#">Log out</a></li>
          </ul>
        </div>
      </li>
    );
  }
}

export { ProfileComponent }; 