import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';

import { SalesTopPointComponent, StatsDetailedComponent } from '../_components';
import { ToolTipComponent } from './ToolTipComponent';
import { WelcomeSectionComponent } from './WelcomeSectionComponent';
import { GraphSectionComponent } from './GraphSectionComponent';

import { drawChart, drawRegionsMap } from '../_helpers/chart';

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

    // drawChart();
    // drawRegionsMap();
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
          </div>
        </section>
        <ToolTipComponent></ToolTipComponent>
      </div>
    );
  }
}

export { HomePage }; 