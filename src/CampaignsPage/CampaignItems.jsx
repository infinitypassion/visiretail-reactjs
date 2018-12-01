import React from 'react';

import { CampaignItem } from './CampaignItem';

class CampaignItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCampaignId: -1
    }
    this.updateCurrentCampaignId = this.updateCurrentCampaignId.bind(this);
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  updateCurrentCampaignId(event) {
    this.setState({ currentCampaignId: event.props.campaign.campaignId })
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      this.props.campaigns.map((campaign, key) => {
        return (
          <CampaignItem key={key} campaign={campaign} isMobile={this.props.isMobile} currentCampaignId={this.state.currentCampaignId} updateCurrentCampaignId={this.updateCurrentCampaignId} />
        );
      })
    );
  }
}

export { CampaignItems }; 
