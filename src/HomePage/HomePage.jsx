import React from 'react';

import { SalesTopPointComponent, StatsDetailedComponent } from '../_components';
import { ToolTipComponent } from './ToolTipComponent';

class HomePage extends React.Component {
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
      <div id="home">
        <section>
          <div className="main homewraper section">
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