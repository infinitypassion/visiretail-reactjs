import React from 'react';
import { Collapse } from 'react-bootstrap';

class ConversionPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  // Start -- React lifecycle methods
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentConversionId > -1 && nextProps.currentConversionId != this.props.conversion.id) {
      this.setState({ collapse: false });
    }
  }
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggle() {
    this.props.updateCurrentConversionId(this);
    this.setState({ collapse: !this.state.collapse });
  }
  // End -- Custom methods

  // Render
  render() {
    if (!this.props.isMobile) {
      return (
        <React.Fragment>
          <tr className={this.state.collapse ? 'collapsible active' : 'collapsible'} onClick={this.toggle}>
            <td>{this.props.conversion.dt}</td>
            <td className="purple">{this.props.conversion.customerName}</td>
            <td>{this.props.conversion.name}</td>
            <td>{this.props.conversion.firstName}</td>
            <td><a href={"mailto:" + this.props.conversion.email}>{this.props.conversion.email}</a></td>
            <td><a href={"tel:" + this.props.conversion.mobile}>{this.props.conversion.mobileStr}</a></td>
            <td className="uper">{this.props.conversion.society}</td>
            <td>{this.props.conversion.messageShort}<span /></td>
          </tr>
          <Collapse in={this.state.collapse}>
            <tr>
              <td className="pad0" />
              <td className="pad0" colSpan={7}>
                <div className="content">
                  <div className="con_l">
                    <h5>{this.props.conversion.message.title}</h5>
                    <p>{this.props.conversion.message.content}</p>
                  </div>
                  <div className="con_r"><a href={"mailto:" + this.props.conversion.email} className="email">Envoyer un e-mail</a></div>
                </div>
              </td>
            </tr>
          </Collapse>
        </React.Fragment>
      );
    } else {
      return (
        <div className="conver_box">
          <div className="conversions_head" onClick={this.toggle}>
            <div className="conver_title">
              <h5>{this.props.conversion.name + ' ' + this.props.conversion.firstName}</h5>
              <label>{this.props.conversion.society}</label>
            </div>
            <div className="date">{this.props.conversion.dt}</div>
          </div>
          <Collapse in={this.state.collapse}>
            <div className="conversions_body">
              <p>{this.props.conversion.message.content}</p>
              <a href={"mailto:" + this.props.conversion.email} className="btn-primary">Répondre par e-mail</a>
            </div>
          </Collapse>
        </div>
      );
    }
  }
}

export { ConversionPage }; 