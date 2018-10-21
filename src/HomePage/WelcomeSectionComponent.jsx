import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, ProgressBar } from 'react-bootstrap';

class WelcomeSectionComponent extends React.Component {
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
      <div className="welcome section">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-xs-12 left_con">
              <h1>Bonjour Visiperf,</h1>
              <p>Il y a du nouveau depuis que vous avez lancé vos campagnes chez Visiperf. Consultez la progression de vos performances digitales sur votre timeline. </p>
            </div>
            <div className="col-sm-4 col-sm-offset-3 col-xs-12">
              <TabContainer id="slaes_activity-tab-container" defaultActiveKey="encours">
                <div className="slaes_activity">
                  <div className="activity_tab">
                    <Nav className="nav-tabs">
                      <NavItem eventKey="encours">en cours</NavItem>
                      <NavItem eventKey="avenir">a venir</NavItem>
                      <NavItem eventKey="passe">passé</NavItem>
                    </Nav>

                    <TabContent>
                      <TabPane eventKey="encours">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Fêtes de fin d’année</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
                                <span className="time">6j 18h</span>
                              </div>
                              <div className="activity_r">
                                <div className="progress_main">
                                  <ProgressBar now={73} />
                                  <span>73%</span>
                                </div>
                                <div className="outof_point">19/25</div>
                              </div>
                            </li>
                            <li>
                              <div className="activity_l">
                                <h5>Soldes d’hiver 2018</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
                                <span className="time">8j 04h</span>
                              </div>
                              <div className="activity_r">
                                <div className="progress_main">
                                  <ProgressBar now={44} />
                                  <span>44%</span>
                                </div>
                                <div className="outof_point">25/25</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </TabPane>
                      <TabPane eventKey="avenir">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Soldes d’hiver 2018</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
                                <span className="time">8j 04h</span>
                              </div>
                              <div className="activity_r">
                                <div className="progress_main">
                                  <ProgressBar now={44} />
                                  <span>44%</span>
                                </div>
                                <div className="outof_point">25/25</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </TabPane>
                      <TabPane eventKey="passe">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Fêtes de fin d’année</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
                                <span className="time">6j 18h</span>
                              </div>
                              <div className="activity_r">
                                <div className="progress_main">
                                  <div className="progress">
                                    <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '73%' }}>
                                    </div>
                                  </div>
                                  <span>73%</span>
                                </div>
                                <div className="outof_point">19/25</div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </TabPane>
                    </TabContent>
                  </div>
                  <a href="#" className="activity_btn">
                    <span> Voir toute l’activité de mes points de vente </span>
                  </a>
                </div>
              </TabContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { WelcomeSectionComponent }; 