import React from 'react';

import { SalesTopPointComponent, StatsDetailedComponent } from '../_components';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Render
  render() {
    return (
      <div id="home">
        <section>
          <div className="main homewraper section">
            <SalesTopPointComponent></SalesTopPointComponent>
            <StatsDetailedComponent></StatsDetailedComponent>
          </div>
        </section>
      </div>
    );
  }
}

export { HomePage }; 