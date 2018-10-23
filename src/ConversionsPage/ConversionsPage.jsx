import React from 'react';
import { TabContainer, Nav, NavItem, TabContent, TabPane, Table } from 'react-bootstrap';

import { icTriangleImg } from '../_helpers';
import { conversionsFakeData } from '../_helpers/fake-data';

import { ConversionPage } from './ConversionPage';

class ConversionsPage extends React.Component {
  constructor() {
    super();

    // Load fake data
    this.state = conversionsFakeData;
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'conversions';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);

    // TODO - Need to convert into react code
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        var coll2 = document.getElementsByClassName("collapsible");

        var this_element = this;

        for (var j = 0; j < coll2.length; j++) {
          if (this !== coll2[j]) {
            coll2[j].classList.remove('active');
            coll2[j].nextElementSibling.querySelector('.content').style.height = 0;
          }
        }

        setTimeout(function () {
          this_element.classList.toggle("active");

          var content = this_element.nextElementSibling.querySelector('.content');

          if (this_element.classList.contains('active')) {
            content.style.height = content.scrollHeight + "px";
          } else {
            content.style.height = 0;
          }
        }, 100);
      });
    }
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
                              this.state.myFormsConversions.map((conversion, key) => {
                                return (
                                  <ConversionPage key={key} conversion={conversion} />
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
                              this.state.myAppealsConversions.map((conversion, key) => {
                                return (
                                  <ConversionPage key={key} conversion={conversion} />
                                );
                              })
                            }
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </div>
                  {/* TODO - Tab wise content is missing for mobile view
                  */}
                  <div className="col-sm-12 col-xs-12 conversions_mobile">
                    <div className="conver_box">
                      <div className="conver_title">
                        <h5>Nenot Baptiste</h5>
                        <label>Visiperf</label>
                      </div>
                      <div className="date">01-05-2018</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. </p>
                      <a href="#" className="btn-primary">Répondre par e-mail</a>
                    </div>
                    <div className="conver_box">
                      <div className="conver_title">
                        <h5>Marie Rosalie</h5>
                        <label>Orixa Média</label>
                      </div>
                      <div className="date">01-05-2018</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. </p>
                      <a href="#" className="btn-primary">Répondre par e-mail</a>
                    </div>
                    <div className="conver_box">
                      <div className="conver_title">
                        <h5>Boulanger Adrien</h5>
                        <label>Carglass</label>
                      </div>
                      <div className="date">01-05-2018</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. </p>
                      <a href="#" className="btn-primary">Répondre par e-mail</a>
                    </div>
                    <div className="conver_box">
                      <div className="conver_title">
                        <h5>Bernard Clémence</h5>
                        <label>N/R</label>
                      </div>
                      <div className="date">01-05-2018</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. </p>
                      <a href="#" className="btn-primary">Répondre par e-mail</a>
                    </div>
                    <div className="conver_box">
                      <div className="conver_title">
                        <h5>Guillaume Katell</h5>
                        <label>N/R</label>
                      </div>
                      <div className="date">01-05-2018</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. </p>
                      <a href="#" className="btn-primary">Répondre par e-mail</a>
                    </div>
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
