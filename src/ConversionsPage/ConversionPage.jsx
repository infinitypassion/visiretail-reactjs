import React from 'react';

class ConversionPage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <React.Fragment>
        <tr className="collapsible">
          <td>{this.props.conversion.dt}</td>
          <td className="purple">{this.props.conversion.customerName}</td>
          <td>{this.props.conversion.name}</td>
          <td>{this.props.conversion.firstName}</td>
          <td><a href={"mailto:" + this.props.conversion.email}>{this.props.conversion.email}</a></td>
          <td><a href={"tel:" + this.props.conversion.mobile}>{this.props.conversion.mobileStr}</a></td>
          <td className="uper">{this.props.conversion.society}</td>
          <td>{this.props.conversion.messageShort}<span /></td>
        </tr>
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
      </React.Fragment>
    );
  }
}

export { ConversionPage }; 