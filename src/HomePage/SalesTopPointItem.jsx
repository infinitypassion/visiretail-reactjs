import React from 'react';
import { Collapse } from 'react-bootstrap';

class SalesTopPointItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: !this.props.isMobile };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.isMobile && nextProps.currentTopPointSalePointId > -1 && nextProps.currentTopPointSalePointId != this.props.campaignSale.id) {
      this.setState({ collapse: false });
    }
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggle() {
    this.props.updateCurrentTopPointSalePointId(this);
    if (this.props.isMobile) {
      this.setState({ collapse: !this.state.collapse });
    }
  }
  // End -- Custom methods

  // Render
  render() {
    const campaignSale = this.props.campaignSale;

    return (
      <div className="sell_point_raw">
        <div className="sell_left" onClick={this.toggle}>
          {
            campaignSale.sellPostionImg ?
              (<span className="sell_no"><img src={campaignSale.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="sell_no bg">{campaignSale.sellPostionNo}</span>)
          }
          <div className="sell_des">
            <h6>{campaignSale.agencyName}</h6>
            <p>{campaignSale.campaignName}</p>
          </div>
        </div>
        <Collapse in={this.state.collapse}>
          <div className="sell_right">
            <div className="sell_type">
              <ul>
                <li>
                  <h6>Impressions</h6>
                  <p>{campaignSale.impressions}</p>
                </li>
                <li>
                  <h6>Clics</h6>
                  <p>{campaignSale.clicks}</p>
                </li>
                <li>
                  <h6>Conversions</h6>
                  <p>{campaignSale.conversions}</p>
                </li>
                <li>
                  <h6>Budget</h6>
                  <p>{campaignSale.budgetSpent}</p>
                </li>
                <li>
                  <h6>Coût du lead</h6>
                  <p className="green">{campaignSale.costPerClick}</p>
                </li>
              </ul>
            </div>
            <a href="#">détails du point de vente</a>
          </div>
        </Collapse>
      </div>
    );
  }
}

export { SalesTopPointItem }; 