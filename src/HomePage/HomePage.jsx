import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, ProgressBar } from 'react-bootstrap';
import MediaQuery from 'react-responsive';

import { graphImg } from '../_helpers';

import { DateRangeComponent } from './DateRangeComponent';
import { WelcomeSectionComponent } from './WelcomeSectionComponent';
import { GraphSectionComponent } from './GraphSectionComponent';
import { SalesTopPointComponent } from './SalesTopPointComponent';
import { StatsDetailedComponent } from './StatsDetailedComponent';
import { ToolTipComponent } from './ToolTipComponent';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'home';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);

    $(function () {
      $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage / 10 + '%'
        }, 1000);
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.mouseWheelEvent);
    window.removeEventListener('DOMMouseScroll', this.mouseWheelEvent);

    document.getElementById('home').classList.remove('closed');
    document.body.id = '';
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  mouseWheelEvent(e) {
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

    if (delta > 0) document.getElementById('home').classList.remove('closed');
    else document.getElementById('home').classList.add('closed');
    return true; // this line is only added so the whole page won't scroll in the demo
  }

  active() {
    var element = document.getElementById("campagne_wraper");
    element.classList.toggle("active");
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div>
        <section>
          <div className="main homewraper section">
            <div className="header_btm section">
              <div className="container">
                <MediaQuery query="(min-device-width: 1224px)">
                  <DateRangeComponent isMobile={false} />
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                  <DateRangeComponent isMobile={true} />
                </MediaQuery>
              </div>
            </div>

            <WelcomeSectionComponent></WelcomeSectionComponent>
            <div className="graph section" onClick={this.active.bind(this)}>
              <img src={graphImg} alt="#" className="img-responsive" />

              <GraphSectionComponent></GraphSectionComponent>
            </div>

            <SalesTopPointComponent></SalesTopPointComponent>

            <div className="statistiques section">
              <div className="container">
                <div className="title">
                  <h6>STAT. DÉTAILLÉES </h6>
                  <p>Ces statistiques vous permettent de mieux connaître votre cible
                    <br />et les personnes interessées par vos produits.
                  </p>
                </div>
                <StatsDetailedComponent></StatsDetailedComponent>
              </div>
            </div>

            <div className="col-sm-4 col-xs-12 sales_mobile">
              <div className="slaes_activity">
                <div className="title">
                  <h6>MES CAMPAGNES</h6>
                </div>
                <TabContainer id="slaes_activity-mobile-tab-container" defaultActiveKey="encours1">
                  <div className="activity_tab">
                    <Nav className="nav-tabs">
                      <NavItem eventKey="encours1">en cours</NavItem>
                      <NavItem eventKey="avenir1">a venir</NavItem>
                      <NavItem eventKey="passe1">passé</NavItem>
                    </Nav>

                    <TabContent>
                      <TabPane eventKey="encours1">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Fêtes de fin d’année</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
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
                      <TabPane eventKey="avenir1">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Soldes d’hiver 2018</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
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
                      <TabPane eventKey="passe1">
                        <div className="activity_list">
                          <ul>
                            <li>
                              <div className="activity_l">
                                <h5>Fêtes de fin d’année</h5>
                                <span className="date">18/12/18 - 20/01/18</span>
                              </div>
                              <div className="activity_r">
                                <div className="progress_main">
                                  <ProgressBar now={73} />
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
                </TabContainer>
              </div>
            </div>
          </div>
        </section>
        <ToolTipComponent></ToolTipComponent>
      </div>
    );
  }
}

export { HomePage }; 
