import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, Table } from 'react-bootstrap';

import { icTriangleImg } from '../_helpers';
import { conversionsFakeData } from '../_helpers/fake-data';

import { ConversionPage } from './ConversionPage';

class ConversionsPage extends React.Component {
  constructor() {
    super();

    // Load fake data
    this.conversionsFakeData = conversionsFakeData;

    this.state = {
      currentConversionId: -1
    }
    this.updateCurrentConversionId = this.updateCurrentConversionId.bind(this);
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'conversions';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('mousewheel', this.mouseWheelEvent);
    window.removeEventListener('DOMMouseScroll', this.mouseWheelEvent);

    document.getElementById('conversions').classList.remove('closed');
    document.body.id = '';
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  mouseWheelEvent(e) {
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;

    if (delta > 0) document.getElementById('conversions').classList.remove('closed');
    else document.getElementById('conversions').classList.add('closed');
    return true; // this line is only added so the whole page won't scroll in the demo
  }

  updateCurrentConversionId(event) {
    this.setState({ currentConversionId: event.props.conversion.id })
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main converwraper  section">
          <div className="head_search section">
            <div className="container">
              <input type="search" placeholder="Rechercher un contact..." className="form-control serch_txt" />
            </div>
          </div>
          <div className="conversions_wraper">
            <div className="container">
              <TabContainer id="my-conversions-tab-container" defaultActiveKey="mes-formulaires">
                <div className="row">
                  <div className="col-sm-6 col-xs-12 pull-right">
                    <div className="conversions_tab">
                      <Nav className="nav-tabs">
                        <NavItem eventKey="mes-formulaires">MES FORMULAIRES</NavItem>
                        <NavItem eventKey="mes-appels">MES APPELS</NavItem>
                      </Nav>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <h1>Mes conversions <span>124 au total</span></h1>
                  </div>
                  <div className="col-sm-12 col-xs-12 conversions_main">
                    <TabContent>
                      <TabPane eventKey="mes-formulaires">
                        <Table condensed style={{ borderCollapse: 'collapse' }}>
                          <thead>
                            <tr>
                              <th><button>DATE<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>CLIENT<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>Nom<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>prénom<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th>E-MAIL</th>
                              <th>Tél</th>
                              <th><button>société<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th>message</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              this.conversionsFakeData.myFormsConversions.map((conversion, key) => {
                                return (
                                  <ConversionPage key={key} conversion={conversion} isMobile={false} currentConversionId={this.state.currentConversionId} updateCurrentConversionId={this.updateCurrentConversionId} />
                                );
                              })
                            }
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane eventKey="mes-appels">
                        <Table condensed style={{ borderCollapse: 'collapse' }}>
                          <thead>
                            <tr>
                              <th><button>DATE<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>CLIENT<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>Nom<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th><button>prénom<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th>E-MAIL</th>
                              <th>Tél</th>
                              <th><button>société<i><img src={icTriangleImg} alt="#" /></i></button></th>
                              <th>message</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              this.conversionsFakeData.myAppealsConversions.map((conversion, key) => {
                                return (
                                  <ConversionPage key={key} conversion={conversion} isMobile={false} currentConversionId={this.state.currentConversionId} updateCurrentConversionId={this.updateCurrentConversionId} />
                                );
                              })
                            }
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </div>
                  {/* Mobile view */}
                  <div className="col-sm-12 col-xs-12 conversions_mobile">
                    <TabContent>
                      <TabPane eventKey="mes-formulaires">
                        {
                          this.conversionsFakeData.myFormsConversions.map((conversion, key) => {
                            return (
                              <ConversionPage key={key} conversion={conversion} isMobile={true} currentConversionId={this.state.currentConversionId} updateCurrentConversionId={this.updateCurrentConversionId} />
                            );
                          })
                        }
                      </TabPane>
                      <TabPane eventKey="mes-appels">
                        {
                          this.conversionsFakeData.myAppealsConversions.map((conversion, key) => {
                            return (
                              <ConversionPage key={key} conversion={conversion} isMobile={true} currentConversionId={this.state.currentConversionId} updateCurrentConversionId={this.updateCurrentConversionId} />
                            );
                          })
                        }
                      </TabPane>
                    </TabContent>
                  </div>
                </div>
              </TabContainer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { ConversionsPage }; 
