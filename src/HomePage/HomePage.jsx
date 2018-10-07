import React from 'react';

import { HeaderComponent, FooterComponent, SalesTopPointComponent, StatsDetailedComponent } from '../_components';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  // Render
  render() {
    return (
      <div id="home">
        <HeaderComponent></HeaderComponent>
        <section>
          <div className="main homewraper section">
            <SalesTopPointComponent></SalesTopPointComponent>
            <StatsDetailedComponent></StatsDetailedComponent>
          </div>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { HomePage }; 