import React from 'react';

import { HeaderComponent, FooterComponent } from '../_components';

class HomePage extends React.Component {
  constructor() {
    super();
  }

  // Render
  render() {
    return (
      <div>
        <section>
          <HeaderComponent></HeaderComponent>
        </section>
        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { HomePage }; 