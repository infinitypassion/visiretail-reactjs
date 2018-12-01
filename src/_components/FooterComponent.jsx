import React from 'react';

class FooterComponent extends React.Component {
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
      <footer>
        <div className="footer section">
          <div className="container">
            <p className="copy_right">visiretail ®</p>
            <p className="powered">Powered with <span /> by Visiperf</p>
          </div>
        </div>
        <div id="mcampagne_btn" className="mcampagne_btn">
          <a href="#"><span>1</span></a>
        </div>
      </footer>
    );
  }
}

export { FooterComponent }; 