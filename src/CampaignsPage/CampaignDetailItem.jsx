import React from 'react';
import { Collapse } from 'react-bootstrap';

class CampaignDetailItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: !this.props.isMobile };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (this.props.isMobile && nextProps.currentId > -1 && nextProps.currentId != this.props.campaignDetail.id) {
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
    let f = this.props.campaignDetail;

    if (!this.props.isMobile) {
      return (
        <tr>
          <td>
            {
              f.sellPostionImg ?
                (<span className="number nbg"><img src={f.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="number">{f.sellPostionNo}</span>)
            }
          </td>
          <td>{f.name}</td>
          <td>{f.impressions}</td>
          <td>{f.clicks}</td>
          <td>{f.conversions}</td>
          <td>{f.budget}</td>
          <td>{f.leadCost}</td>
          <td><a href="#" /></td>
        </tr>
      );
    } else {
      return (
        <li>
          <div className={this.state.collapse ? "sell_point_raw open" : "sell_point_raw"} onClick={this.toggle}>
            <div className="sell_left">
              {
                f.sellPostionImg ?
                  (<span className="sell_no"><img src={f.sellPostionImg} className="img-responsive" alt="#" /></span>) : (<span className="sell_no bg">{f.sellPostionNo}</span>)
              }
              <div className="sell_des">
                <h6>{f.name}</h6>
                <span className="mclick">{f.mClicks}</span>
              </div>
            </div>
            <Collapse in={this.state.collapse}>
              <div className="sell_right">
                <div className="sell_type">
                  <ul>
                    <li>
                      <h6>Impressions</h6>
                      <p>{f.impressions}</p>
                    </li>
                    <li>
                      <h6>Clics</h6>
                      <p>{f.clicks}</p>
                    </li>
                    <li>
                      <h6>Conversions</h6>
                      <p>{f.conversions}</p>
                    </li>
                    <li>
                      <h6>Budget</h6>
                      <p>{f.budget}</p>
                    </li>
                    <li>
                      <h6>Coût du lead</h6>
                      <p className="green">{f.leadCost}</p>
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

export { CampaignDetailItem }; 