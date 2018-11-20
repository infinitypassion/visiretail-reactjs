import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, ProgressBar } from 'react-bootstrap';
import { Chart } from 'react-google-charts';
import MediaQuery from 'react-responsive';

import { icGoogleImg, icFacebookImg, countryGraphImg, clicksImg, icClicsImg, impressionsImg, icImpressionsImg, icCtrImg, icPorteeImg, porteeImg, icGenreImg, icCumulImg, icMoyenImg, coutMoyenImg } from '../_helpers';
import { GoolgleStatItem } from './GoogleStatItem';

class StatsDetailedComponent extends React.Component {
  constructor() {
    super();

    this.geoData = [
      ['Destination', 'Popularity'],
      ['FR-A', 0],
      ['FR-B', 105],
      ['FR-C', 110],
      ['FR-P', 115],
      ['FR-D', 120],
      ['FR-E', 125],
      ['FR-F', 130],
      ['FR-G', 140],
      ['FR-H', 0],
      ['FR-I', 160],
      ['FR-Q', 175],
      ['FR-J', 700],
      ['FR-K', 215],
      ['FR-L', 235],
      ['FR-M', 255],
      ['FR-N', 100],
      ['FR-O', 305],
      ['FR-R', 335],
      ['FR-S', 365],
      ['FR-T', 400],
      ['FR-U', 440],
      ['FR-V', 100]
    ];
    this.geoOptions = {
      region: 'FR',
      displayMode: 'regions',
      colorAxis: {
        colors: ['#A8BFDA', '#3973B4']
      },
      backgroundColor: '#ffffff',
      datalessRegionColor: '#F6F5F6',
      defaultColor: '#f5f5f5',
      resolution: 'provinces'
    };

    this.barData = [
      ['AgeGroup', 'Clicks', { role: 'style' }, { role: 'annotation', calc: "stringify" }],
      ['18-24', 242, '#D1D1D1', '242'],
      ['25-34', 398, '#D1D1D1', '398'],
      ['35-44', 487, '#D1D1D1', '487'],
      ['45-54', 741, '#3B5998', '741'],
      ['55-64', 512, '#D1D1D1', '512'],
      ['65+', 385, '#D1D1D1', '385']
    ];

    this.verticalBarOptions = {
      chartArea: {
        left: "5%",
        top: 0,
        width: '70%',
        height: '40%'
      },
      bar: { groupWidth: '35%' },
      legend: { position: "none" },
      vAxis: {
        textPosition: 'none', baselineColor: 'none',
        ticks: []
      },
      hAxis: {
        viewWindowMode: 'maximized',
        baselineColor: 'none',
        ticks: [],
        textStyle: {
          fontName: 'Barlow',
          fontSize: 11,
          color: '#93A1AD'
        }
      },
      tooltip: {
        trigger: 'none'
      },
      annotations: {
        alwaysOutside: false,
        textStyle: {
          fontName: 'Barlow',
          fontSize: 11,
          color: '#93A1AD'
        }
      }
    };

    this.horizontalBarOptions = {
      chartArea: {
        left: "10%",
        top: 0,
        width: '60%',
        height: '50%'
      },
      bar: { groupWidth: '50%' },
      legend: { position: "none" },
      hAxis: {
        textPosition: 'none', baselineColor: 'none',
        ticks: []
      },
      vAxis: {
        viewWindowMode: 'maximized',
        baselineColor: 'none',
        ticks: [],
        textStyle: {
          fontName: 'Barlow',
          fontSize: 11,
          color: '#93A1AD'
        }
      },
      tooltip: {
        trigger: 'none'
      },
      annotations: {
        alwaysOutside: true,
        textStyle: {
          fontName: 'Barlow',
          fontSize: 11,
          color: '#93A1AD'
        }
      }
    };

    this.pieData = [
      ['Cumulative', 'Clicks'],
      ['Hommes : 63.45%', 63],
      ['Femmes : 25.12%', 25],
      ['Inconnu : 12.06%', 12],
    ];
    this.pieOptions = {
      pieStartAngle: 130,
      pieSliceText: 'none',
      tooltip: {
        trigger: 'none'
      },
      sliceVisibilityThreshold: 0,
      slices: {
        0: {
          color: '#3B5998'
        },
        1: {
          color: '#AFBDD4'
        },
        2: {
          color: '#D1D1D1'
        },
      },
      legendShape: 'square',
      legend: {
        textStyle: {
          color: '#6E6E6E',
          fontName: 'Barlow',
          fontSize: 14
        }
      },
      chartArea: {
        left: 0,
        top: 0,
        width: '60%',
        height: '45%'
      }
    };

    this.googleStatFakeData = [{
      id: 1,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 2,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 3,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 4,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 5,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 6,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 7,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 8,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }, {
      id: 9,
      mClick: '10 971',
      impressions: '179 971',
      clicks: '10 971',
      conversions: 25,
      budgetSpent: '299,00€',
      costOfLead: '1,084€'
    }];

    this.state = {
      currentGoogleStatId: -1
    }
    this.updateCurrentGoogleStatId = this.updateCurrentGoogleStatId.bind(this);
  }

  // Start -- React lifecycle methods
  updateCurrentGoogleStatId(event) {
    this.setState({ currentGoogleStatId: event.props.googleStatData.id })
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  generate(eventKey, type) {
    return eventKey;
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="statistiques_main">
        <TabContainer id="statistiques-tab-container" defaultActiveKey="google">
          <div className="statistiques_tab">
            <Nav className="nav-tabs">
              <NavItem eventKey="google">GOOGLE<span><img src={icGoogleImg} className="img-responsive" alt="google" /></span></NavItem>
              <NavItem eventKey="facebook">FACEBOOK<span><img src={icFacebookImg} className="img-responsive" alt="google" /></span></NavItem>
            </Nav>

            <TabContent>
              <TabPane eventKey="google">
                <div className="statistiques_con">
                  <p>Le budget dépensé sur Google les 6 derniers mois</p>
                  <h2>786,00€</h2>
                  <ProgressBar>
                    <ProgressBar now={63} label="63%" />
                    <ProgressBar bsClass="budeget_data" label="1 787,59€" />
                  </ProgressBar>
                  <div className="row google_budgtes">
                    {
                      this.googleStatFakeData.map((googleStatData, key) => {
                        return (
                          <div className="col-sm-4 col-xs-12" key={key}>
                            <MediaQuery query="(min-device-width: 1224px)">
                              <GoolgleStatItem googleStatData={googleStatData} isMobile={false} />
                            </MediaQuery>
                            <MediaQuery query="(max-device-width: 1224px)">
                              <GoolgleStatItem googleStatData={googleStatData} isMobile={true} currentGoogleStatId={this.state.currentGoogleStatId} updateCurrentGoogleStatId={this.updateCurrentGoogleStatId} />
                            </MediaQuery>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </TabPane>
              <TabPane eventKey="facebook">
                <div className="statistiques_con">
                  <p>Le budget dépensé sur Facebook les 6 derniers mois</p>
                  <h2>12 879,00€</h2>
                  <ProgressBar>
                    <ProgressBar now={43} label="43%" />
                    <ProgressBar bsClass="budeget_data" label="26 786,00€" />
                  </ProgressBar>
                  <TabContainer id="socialchar-tab-container" defaultActiveKey="country" generateChildId={this.generate}>
                    <div className="socialchar_tab">
                      <Nav className="nav-tabs">
                        <NavItem eventKey="country">
                          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="12.573px" height="11.317px" viewBox="0.174 0.353 12.573 11.317" enableBackground="new 0.174 0.353 12.573 11.317" xmlSpace="preserve">
                            <path d="M3.317,6.64H0.174v5.029h3.143V6.64z" />
                            <path d="M12.747,0.353H9.604v11.316h3.144V0.353z" />
                            <path d="M8.032,3.496H4.889v8.174h3.144V3.496z" />
                          </svg>
                        </NavItem>
                        <NavItem eventKey="regions">
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
                          </svg>
                        </NavItem>
                      </Nav>
                      <TabContent>
                        <TabPane eventKey="country">
                          <img src={countryGraphImg} className="img-responsive" alt="country" />
                        </TabPane>
                        <TabPane eventKey="regions">
                          <div id="regions_div" style={{ width: 900, height: 500 }}>
                            <Chart
                              chartType="GeoChart"
                              data={this.geoData}
                              options={this.geoOptions}
                              mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
                            />
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                  </TabContainer>
                  <div className="facebook_budget">
                    <ul>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <span className="icon"><img src={clicksImg} alt="Clics" className="img-responsive" /></span>
                            <h3>987</h3>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icClicsImg} alt="Clics" className="img-responsive" /></i>Clics</h5>
                            <p>Think of reach as the number of unique people who see your content. In a perfect world.	</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <span className="icon"><img src={impressionsImg} alt="impressions" className="img-responsive" /></span>
                            <h3>19 785</h3>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icImpressionsImg} alt="Impressions" className="img-responsive" /></i>Impressions</h5>
                            <p>There is also a 2:1 ratio of male to all other age groups combined.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <h3>0,78%</h3>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icCtrImg} alt="CTR" className="img-responsive" /></i>CTR</h5>
                            <p>30-40 age people are the most visitors of your campaign.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <span className="icon"><img src={porteeImg} alt="portée" className="img-responsive" /></span>
                            <h3>359 589</h3>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icPorteeImg} alt="Portée" className="img-responsive" /></i>Portée</h5>
                            <p>Think of reach as the number of unique people who see your content. In a perfect world.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <div id="piechart">
                              <Chart
                                chartType="PieChart"
                                data={this.pieData}
                                options={this.pieOptions}
                              />
                            </div>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icGenreImg} alt="genre" className="img-responsive" /></i>Clics cumulés par genre</h5>
                            <p>There is also a 2:1 ratio of male to all other age groups combined.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <div id="barchart">
                              <MediaQuery query="(min-device-width: 1224px)">
                                <Chart
                                  chartType="ColumnChart"
                                  data={this.barData}
                                  options={this.verticalBarOptions}
                                />
                              </MediaQuery>
                              <MediaQuery query="(max-device-width: 1224px)">
                                <Chart
                                  chartType="BarChart"
                                  data={this.barData}
                                  options={this.horizontalBarOptions}
                                />
                              </MediaQuery>
                            </div>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icCumulImg} alt="cumulés" className="img-responsive" /></i>Clics cumulés par âge</h5>
                            <p>30-40 age people are the most visitors of your campaign.</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="spent_box">
                          <div className="spent_top">
                            <span className="icon"><img src={coutMoyenImg} alt="coût-moyen" className="img-responsive" /></span>
                            <h3>0,24€</h3>
                          </div>
                          <div className="spent_des">
                            <h5><i><img src={icMoyenImg} alt="moyen" className="img-responsive" /></i>Coût moyen du clic</h5>
                            <p>Think of reach as the number of unique people who see your content. In a perfect world.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </TabContainer>
      </div>
    );
  }
}

export { StatsDetailedComponent }; 