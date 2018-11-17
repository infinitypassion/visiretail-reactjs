import React from 'react';
import { Collapse } from 'react-bootstrap';

class NetworkOverviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: !this.props.isMobile };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.isMobile && nextProps.currentId > -1 && nextProps.currentId != this.props.networkOverview.id) {
      this.setState({ collapse: false });
    }
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggle() {
    if (this.props.isMobile) {
      this.props.updateCurrentId(this);
      this.setState({ collapse: !this.state.collapse });
    }
  }
  // End -- Custom methods

  // Render
  render() {
    let networkOverviewData = this.props.networkOverview;

    if (!this.props.isMobile) {
      return (
        <tr>
          <td>
            {
              networkOverviewData.sellPostionImg ?
                (<span className="number nbg"><img src={networkOverviewData.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{networkOverviewData.sellPostionNo}</span>)
            }
          </td>
          <td>{networkOverviewData.name}</td>
          <td>{networkOverviewData.impressions}</td>
          <td>{networkOverviewData.clicks}</td>
          <td>{networkOverviewData.conversions}</td>
          <td>{networkOverviewData.budget}</td>
          <td>{networkOverviewData.costOfLead}</td>
          <td><a href="#" /></td>
        </tr>
      );
    } else if (this.props.isMobile) {
      return (
        <li>
          <div className={this.state.collapse ? "sell_point_raw open" : "sell_point_raw"} onClick={this.toggle}>
            <div className="sell_left">
              {
                networkOverviewData.sellPostionImg ?
                  (<span className="sell_no"><img src={networkOverviewData.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="sell_no bg">{networkOverviewData.sellPostionNo}</span>)
              }
              <div className="sell_des">
                <h6>{networkOverviewData.name}</h6>
                <span className="mclick">{networkOverviewData.clicks}</span>
              </div>
            </div>
            <Collapse in={this.state.collapse}>
              <div className="sell_right">
                <div className="sell_type">
                  <ul>
                    <li>
                      <h6>Impressions</h6>
                      <p>{networkOverviewData.impressions}</p>
                    </li>
                    <li>
                      <h6>Clics</h6>
                      <p>{networkOverviewData.clicks}</p>
                    </li>
                    <li>
                      <h6>Conversions</h6>
                      <p>{networkOverviewData.conversions}</p>
                    </li>
                    <li>
                      <h6>Budget</h6>
                      <p>{networkOverviewData.budget}</p>
                    </li>
                    <li>
                      <h6>Coût du lead</h6>
                      <p className="green">{networkOverviewData.costOfLead}</p>
                    </li>
                  </ul>
                </div>
                <a href="#">détails du point de vente</a>
              </div>
            </Collapse>
          </div>
        </li>
      );
    }
  }
}

export { NetworkOverviewItem }; 