import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import { drawChart, drawRegionsMap } from '../_helpers/chart';

import { WelcomeSectionComponent } from './WelcomeSectionComponent';
import { GraphSectionComponent } from './GraphSectionComponent';
import { SalesTopPointComponent } from './SalesTopPointComponent';
import { StatsDetailedComponent } from './StatsDetailedComponent';
import { ToolTipComponent } from './ToolTipComponent';

const DRP_LOCALE = {
  "daysOfWeek": [
    "DI",
    "LU",
    "MA",
    "ME",
    "JE",
    "VE",
    "SA"
  ],
  "monthNames": [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  "firstDay": 0
};
class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      from: moment().format('DD-MM-YYYY'),
      to: moment().format('DD-MM-YYYY')
    };
  }

  // Start -- React lifecycle methods
  componentDidMount() {
    document.body.id = 'home';

    window.addEventListener('mousewheel', this.mouseWheelEvent);
    window.addEventListener('DOMMouseScroll', this.mouseWheelEvent);

    // TODO - need to convert into react
    $(function () {
      $("#bars li .bar").each(function (key, bar) {
        var percentage = $(this).data('percentage');
        $(this).animate({
          'height': percentage / 10 + '%'
        }, 1000);
      });
    });

    drawChart();
    drawRegionsMap();
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

  handleDRPApplyEvent(event, picker) {
    this.setState({ from: picker.startDate.format('DD-MM-YYYY'), to: picker.endDate.format('DD-MM-YYYY') })
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
                <div className="daterange">
                  <input style={{ display: 'none' }} type="text" defaultValue="personnalisé..." className="daterangepicker2" />
                  <div className="for_date">
                    <h6>Début</h6>
                    <label className="from"> {this.state.from} </label>
                  </div>
                  <div className="for_date">
                    <h6>Fin</h6>
                    <label className="to"> {this.state.to} </label>
                  </div>
                </div>
                <div className="performance_nav">
                  <h5>Séléctionnez une période</h5>
                  <ul>
                    <li><a href="#">l’an dernier</a></li>
                    <li><a href="#">les 6 derniers mois </a></li>
                    <li><a href="#">le mois dernier</a></li>
                    <li><a href="#">la semaine dernière</a></li>
                    <li>
                      <DateRangePicker locale={DRP_LOCALE} onApply={this.handleDRPApplyEvent.bind(this)}>
                        <a>personnalisé...</a>
                      </DateRangePicker>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <WelcomeSectionComponent></WelcomeSectionComponent>
            <GraphSectionComponent></GraphSectionComponent>
            <SalesTopPointComponent></SalesTopPointComponent>
            <StatsDetailedComponent></StatsDetailedComponent>

            <div className="col-sm-4 col-xs-12 sales_mobile">
              <div className="slaes_activity">
                <div className="title">
                  <h6>MES CAMPAGNES</h6>
                </div>
                <div className="activity_tab">
                  <ul className="nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#en-cours1">en cours</a></li>
                    <li><a data-toggle="tab" href="#venir1">a venir</a></li>
                    <li><a data-toggle="tab" href="#passe1">passé</a></li>
                  </ul>
                  <div className="tab-content">
                    <div id="en-cours1" className="tab-pane fade in active">
                      <div className="activity_list">
                        <ul>
                          <li>
                            <div className="activity_l">
                              <h5>Fêtes de fin d’année</h5>
                              <span className="date">18/12/18 - 20/01/18</span>
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
                          <li>
                            <div className="activity_l">
                              <h5>Soldes d’hiver 2018</h5>
                              <span className="date">18/12/18 - 20/01/18</span>
                            </div>
                            <div className="activity_r">
                              <div className="progress_main">
                                <div className="progress">
                                  <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '44%' }}>
                                  </div>
                                </div>
                                <span>44%</span>
                              </div>
                              <div className="outof_point">25/25</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="venir1" className="tab-pane fade">
                      <div className="activity_list">
                        <ul>
                          <li>
                            <div className="activity_l">
                              <h5>Soldes d’hiver 2018</h5>
                              <span className="date">18/12/18 - 20/01/18</span>
                            </div>
                            <div className="activity_r">
                              <div className="progress_main">
                                <div className="progress">
                                  <div className="progress-bar  active" role="progressbar" aria-valuemin={0} aria-valuemax={100} style={{ width: '44%' }}>
                                  </div>
                                </div>
                                <span>44%</span>
                              </div>
                              <div className="outof_point">25/25</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div id="passe1" className="tab-pane fade">
                      <div className="activity_list">
                        <ul>
                          <li>
                            <div className="activity_l">
                              <h5>Fêtes de fin d’année</h5>
                              <span className="date">18/12/18 - 20/01/18</span>
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
                    </div>
                  </div>
                </div>
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