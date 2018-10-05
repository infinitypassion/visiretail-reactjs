import React from 'react';

import { digitalisesImg, campagnesImg, medal1Img, medal1kImg, medalImg } from '../_helpers';
import { sidebar, close_sidebar } from '../_helpers/main';

class NotificationComponent extends React.Component {
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
      <li className="notification" id="notification">
        <a href="javascript:void(0)" onClick={sidebar.bind(this)}>Notifications <span className="noof_noti">3</span></a>
        <div className="sidebar">
          <div className="notification_main">
            <div className="noti_top">
              <div className="noti_head">
                <h4>Notifications <span className="noof_noti">3</span></h4>
                <span className="close_noti" onClick={close_sidebar.bind(this)} />
              </div>
              <div className="campaigns_con">
                <ul>
                  <li>
                    <span className="campaigns_ico">
                      <img src={digitalisesImg} className="img-responsive" alt="digitalisés" />
                    </span>
                    <h6>Points de vente <br />digitalisés</h6>
                    <div className="progress_main">
                      <span>260/358</span>
                      <div className="progress">
                        <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }}>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span className="campaigns_ico"><img src={campagnesImg} className="img-responsive" alt="Campagnes" /></span>
                    <h6>Campagnes lancées</h6>
                    <span>Objectif : 3000</span>
                    <div className="medal_list">
                      <ul>
                        <li><img src={medal1Img} alt="medal" className="img-responsive" /></li>
                        <li><img src={medal1kImg} alt="medal" className="img-responsive" /></li>
                        <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                        <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                        <li><img src={medalImg} alt="medal" className="img-responsive" /></li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="notification_list">
              <h6>Aujourd’hui</h6>
              <ul>
                <li className="today">
                  <p><a href="#">Visiperf Paris Gobelins</a> a lancé la campagne <a href="#">Toussaint</a></p>
                  <span className="time">21:30</span>
                </li>
                <li className="today">
                  <p><a href="#">Visiperf Aéroport Charles de Gaulle</a> a lancé la campagne <a href="#">Soldes d’hiver 2018</a></p>
                  <span className="time">20:04</span>
                </li>
                <li className="today">
                  <p><a href="#">Visiperf Mérignac</a> a lancé la campagne <a href="#">Soldes d’hiver 2018</a></p>
                  <span className="time">21:15</span>
                </li>
                <li>
                  <p>Vous avez eu <a href="#">20 conversions</a> sur la camagne<a href="#">Toussaint</a></p>
                  <span className="time">18:48</span>
                </li>
              </ul>
              <h6>Hier</h6>
              <ul>
                <li>
                  <p><a href="#">Vous avez eu 48 conversions</a> sur la camagne <a href="#">Soldes d’hiver 2018</a></p>
                  <span className="time">18:48</span>
                </li>
                <li>
                  <p>	<a href="#">Vous avez eu 24 conversions</a> sur la camagne <a href="#">Toussaint</a></p>
                  <span className="time">18:48</span>
                </li>
              </ul>
            </div>
            <a href="#" className="activity_btn">
              <span>Voir toute l’activité de mes points de vente </span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export { NotificationComponent }; 