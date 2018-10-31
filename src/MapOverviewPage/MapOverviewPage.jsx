import React from 'react';
import { Link } from 'react-router-dom';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';

import { loadMap } from '../_helpers/map';

class MapOverviewPage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    loadMap();
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <TabContainer id="overviwe-data-tab-container" defaultActiveKey="impressions">
          <div className="main section">
            <div className="overview_main section">
              <div className="container">
                <div className="overview_left">
                  <h1>Overview</h1>
                  <TabContainer id="overviwe-tab-container" defaultActiveKey="map-overview">
                    <div className="overviwe_tab">
                      <Nav className="nav-tabs">
                        <NavItem eventKey="network-overview" href="#/app/networkOverview">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15.112px" height="10.841px" viewBox="0.016 0.485 15.112 10.841" enableBackground="new 0.016 0.485 15.112 10.841" xmlSpace="preserve">
                            <path d="M15.128,0.485H3.587v2.168h11.541V0.485z" />
                            <path d="M15.128,4.821H3.587v2.168h11.541V4.821z" />
                            <path d="M15.128,9.158H3.587v2.168h11.541V9.158z" />
                            <path d="M2.184,0.485H0.016v2.168h2.168V0.485z" />
                            <path d="M2.184,4.821H0.016v2.168h2.168V4.821z" />
                            <path d="M2.184,9.158H0.016v2.168h2.168V9.158z" />
                          </svg><span>LISTE</span>
                        </NavItem>
                        <NavItem eventKey="map-overview" href="/app/mapOverview">
                          <svg version="1.1" width="14.259px" height="14.259px" viewBox="0.737 0.882 14.259 14.259" enableBackground="new 0.737 0.882 14.259 14.259" xmlSpace="preserve">
                              <path d="M12.908,13.053c1.346-1.348,2.088-3.138,2.088-5.042s-0.742-3.694-2.088-5.041
                              c-1.348-1.347-3.138-2.088-5.042-2.088S4.171,1.623,2.825,2.97C1.479,4.316,0.737,6.106,0.737,8.011s0.742,3.694,2.088,5.042
                              c1.347,1.346,3.137,2.088,5.042,2.088S11.561,14.398,12.908,13.053z M12.277,3.6c0.878,0.878,1.462,1.972,1.703,3.162
                              c-0.188-0.276-0.367-0.379-0.479,0.239c-0.115,1.008-1.041,0.364-1.623,0.722c-0.612-0.413-1.99,0.803-1.756-0.568
                              c0.361-0.619,1.949,0.828,1.158-0.481C10.775,5.76,9.434,3.737,9.609,2.688C9.631,1.16,8.047,2.369,7.502,2.876
                              c-0.367,1.016-0.125,2.79-1.085,3.288c-1.042,0.045-1.936,0.14-2.339,1.304C3.835,8.301,4.336,9.541,5.229,9.732
                              c1.307,0.821,1.774-0.961,3-0.994c0.381,0.398,1.418,0.524,1.504,0.971c-0.805,0.143,1.02,0.676-0.077,0.98
                              c-0.605-0.071-0.995-0.628-0.674-1.1c-1.173-0.273-1.21,1.697-2.338,1.076c-0.029-0.983-1.841-0.319-0.627-0.12
                              c0.417,0.183-0.68,0.71-0.087,0.614c0.292,0.016,1.272,0.359,1.007,0.591c0.546,0.339,1.004-0.812,1.539,0.026
                              c0.386,0.645-0.162,0.764-0.646,0.437c-0.272,0.306,0.481,0.964,1.146,1.249c0.222,0.096,0.433,0.146,0.595,0.133
                              c0.336-0.387,0.955-0.454,0.987,0.047c-0.829,0.396-1.744,0.606-2.691,0.606c-1.359,0-2.652-0.432-3.722-1.23
                              c0.288-0.132,0.451-0.296,0.174-0.506c-0.215-0.642-1.088-1.502-1.855-1.38c-0.398-0.687-0.66-1.443-0.772-2.235
                              c0.642-0.212,0.79-0.633,0.652-0.773c-0.327-0.286-0.528-0.69-0.632-1.132C1.92,5.713,2.521,4.534,3.455,3.6
                              C4.633,2.421,6.2,1.772,7.866,1.772C9.533,1.772,11.1,2.421,12.277,3.6z" />
                            </svg><span>CARTE</span>
                        </NavItem>
                      </Nav>
                    </div>
                  </TabContainer>
                  <div className="overview_datatab">
                    <Nav className="nav-tabs">
                      <NavItem eventKey="impressions">impressions</NavItem>
                      <NavItem eventKey="clics">clics</NavItem>
                      <NavItem eventKey="conversions">conversions</NavItem>
                      <NavItem eventKey="budget">budget</NavItem>
                      <NavItem eventKey="coût-du-lead">coût-du-lead</NavItem>
                    </Nav>
                  </div>
                </div>
              </div>
            </div>
            <TabContent>
              <TabPane eventKey="impressions">
                <div className="container">
                  <div className="data_left">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h6>charonne</h6>
                        <span className="value">742 305</span>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">587 366</span>
                      </li>
                      <li>
                        <span className="number">4</span>
                        <h6>Nation</h6>
                        <span className="value">251 627</span>
                      </li>
                      <li>
                        <span className="number">5</span>
                        <h6>Cadet</h6>
                        <span className="value">251 627</span>
                      </li>
                      <li>
                        <span className="number">6</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">7</span>
                        <h6>charonne</h6>
                        <span className="value">742 305</span>
                      </li>
                      <li>
                        <span className="number">8</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">587 366</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="map_right">
                  <div id="map" />
                </div>
              </TabPane>
              <TabPane eventKey="clics">
                <div className="container">
                  <div className="data_left">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h6>charonne</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">4</span>
                        <h6>Nation</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">5</span>
                        <h6>Cadet</h6>
                        <span className="value">879 698</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPane>
              <TabPane eventKey="conversions">
                <div className="container">
                  <div className="data_left">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h6>charonne</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">4</span>
                        <h6>Nation</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">5</span>
                        <h6>Cadet</h6>
                        <span className="value">879 698</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPane>
              <TabPane eventKey="budget">
                <div className="container">
                  <div className="data_left">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h6>charonne</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">4</span>
                        <h6>Nation</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">5</span>
                        <h6>Cadet</h6>
                        <span className="value">879 698</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPane>
              <TabPane eventKey="coût-du-lead">
                <div className="container">
                  <div className="data_left">
                    <ul>
                      <li>
                        <span className="number">1</span>
                        <h6>Richard Lenoir</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">2</span>
                        <h6>charonne</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">3</span>
                        <h6>VOLTAIRE</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">4</span>
                        <h6>Nation</h6>
                        <span className="value">879 698</span>
                      </li>
                      <li>
                        <span className="number">5</span>
                        <h6>Cadet</h6>
                        <span className="value">879 698</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </section>
    );
  }
}

export { MapOverviewPage }; 