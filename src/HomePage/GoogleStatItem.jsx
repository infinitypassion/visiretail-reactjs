import React from 'react';
import { Collapse } from 'react-bootstrap';

class GoolgleStatItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: !this.props.isMobile };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.isMobile && nextProps.currentGoogleStatId > -1 && nextProps.currentGoogleStatId != this.props.googleStatData.id) {
      this.setState({ collapse: false });
    }
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggle() {
    if (this.props.isMobile) {
      this.props.updateCurrentGoogleStatId(this);
      this.setState({ collapse: !this.state.collapse });
    }
  }

  // Render
  render() {
    const googleStatData = this.props.googleStatData;

    return (
      <div className={this.state.collapse ? "budgtes_box open" : "budgtes_box"}>
        <div className="budget_title" onClick={this.toggle}>
          <span className="number">{googleStatData.id}</span>
          <h3>Référencement local</h3>
          <label className="mclick">{googleStatData.mClick}</label>
        </div>
        <Collapse in={this.state.collapse}>
          <div>
            <div className="budget_type">
              <span className="impressions">{googleStatData.impressions}</span>
              <span className="clics">{googleStatData.clicks}</span>
              <span className="conversions">{googleStatData.conversions}</span>
            </div>
            <div className="budeget_des">
              <ul>
                <li><span>impressions</span><strong>{googleStatData.impressions}</strong></li>
                <li><span>clics</span><strong>{googleStatData.clicks}</strong></li>
                <li><span>conversions</span><strong>{googleStatData.conversions}</strong></li>
                <li><span>Budget dépensé</span><strong>{googleStatData.budgetSpent}</strong></li>
                <li><span>Coût du lead</span><strong>{googleStatData.costOfLead}</strong></li>
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

export { GoolgleStatItem }; 