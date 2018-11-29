import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import MediaQuery from 'react-responsive';
import { Collapse } from 'react-bootstrap';
import moment from 'moment';

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

class DateRangeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      from: moment().format('DD-MM-YYYY'),
      to: moment().format('DD-MM-YYYY'),
      collapse: !this.props.isMobile
    };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  handleDRPApplyEvent(event, picker) {
    this.setState({ from: picker.startDate.format('DD-MM-YYYY'), to: picker.endDate.format('DD-MM-YYYY'), collapse: this.state.collapse });
  }

  toggle() {
    if (this.props.isMobile) {
      this.setState({ collapse: !this.state.collapse, from: this.state.from, to: this.state.to });
    }
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <div className="header_btm section">
        <div className="container">
          <div className="daterange" onClick={this.toggle}>
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
          <Collapse in={this.state.collapse}>
            <div className="performance_nav">
              <h5>Séléctionnez une période</h5>
              <ul>
                <li><a href="#">l’an dernier</a></li>
                <li><a href="#">les 6 derniers mois </a></li>
                <li><a href="#">le mois dernier</a></li>
                <li><a href="#">la semaine dernière</a></li>
                <li>
                  <MediaQuery query="(min-device-width: 1224px)">
                    <DateRangePicker locale={DRP_LOCALE} onApply={this.handleDRPApplyEvent.bind(this)}>
                      <a>personnalisé...</a>
                    </DateRangePicker>
                  </MediaQuery>
                  <MediaQuery query="(max-device-width: 1224px)">
                    <DateRangePicker locale={DRP_LOCALE} onApply={this.handleDRPApplyEvent.bind(this)} linkedCalendars={false}>
                      <a>personnalisé...</a>
                    </DateRangePicker>
                  </MediaQuery>
                </li>
              </ul>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}

export { DateRangeComponent }; 
