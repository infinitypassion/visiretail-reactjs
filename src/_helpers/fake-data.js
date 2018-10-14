import { sellPostion1Img, sellPostion2Img, sellPostion3Img } from '../_helpers';

export let campaignsFakeData = {
  campaigns: {
    inProgress: [
      {
        campaignId: 1,
        campagneMainClass: 'campagne_main rentree',
        agencyName: 'préstation ponctuelle',
        campaignName: 'Rentrée scolaire',
        advanced: 70,
        advancedStr: '70%',
        google: {
          budget: '12 876,00€',
          progress: 63,
          progressStr: '63%'
        },
        facebook: {
          budget: '3 158,00€',
          progress: 27,
          progressStr: '27%'
        },
        impressions: '187 987',
        clicks: '13 504',
        conversions: '89',
        budgetSpent: '16 034,00€',
        costPerClick: '1,2974€'
      },
      {
        campaignId: 2,
        campagneMainClass: 'campagne_main toussaint',
        agencyName: 'ABONNEMENT',
        campaignName: 'Toussaint',
        advanced: 36,
        advancedStr: '36%',
        google: {
          budget: '5 900,00€',
          progress: 57,
          progressStr: '57%'
        },
        facebook: {
          budget: '4 200,00€',
          progress: 43,
          progressStr: '43%'
        },
        impressions: '67 985',
        clicks: '6 582',
        conversions: '32',
        budgetSpent: '10 100,00€',
        costPerClick: '1,896€'
      },
      {
        campaignId: 3,
        campagneMainClass: 'campagne_main vacances',
        agencyName: 'préstation ponctuelle',
        campaignName: 'Vacances d’été',
        advanced: 93,
        advancedStr: '93%',
        google: {
          budget: '3 900,00€',
          progress: 19,
          progressStr: '19%'
        },
        facebook: {
          budget: '17 200,00€',
          progress: 81,
          progressStr: '81%'
        },
        impressions: '178 985',
        clicks: '19 876',
        conversions: '547',
        budgetSpent: '21 800,00€',
        costPerClick: '1,896€'
      }
    ],
    future: [
      {
        campaignId: 4,
        campagneMainClass: 'campagne_main vacances',
        agencyName: 'préstation ponctuelle',
        campaignName: 'Vacances d’été',
        advanced: 93,
        advancedStr: '93%',
        google: {
          budget: '3 900,00€',
          progress: 19,
          progressStr: '19%'
        },
        facebook: {
          budget: '17 200,00€',
          progress: 81,
          progressStr: '81%'
        },
        impressions: '178 985',
        clicks: '19 876',
        conversions: '547',
        budgetSpent: '21 800,00€',
        costPerClick: '1,896€'
      }
    ],
    past: [
      {
        campaignId: 5,
        campagneMainClass: 'campagne_main rentree',
        agencyName: 'préstation ponctuelle',
        campaignName: 'Rentrée scolaire',
        advanced: 70,
        advancedStr: '70%',
        google: {
          budget: '12 876,00€',
          progress: 63,
          progressStr: '63%'
        },
        facebook: {
          budget: '3 158,00€',
          progress: 27,
          progressStr: '27%'
        },
        impressions: '187 987',
        clicks: '13 504',
        conversions: '89',
        budgetSpent: '16 034,00€',
        costPerClick: '1,2974€'
      },
      {
        campaignId: 6,
        campagneMainClass: 'campagne_main toussaint',
        agencyName: 'ABONNEMENT',
        campaignName: 'Toussaint',
        advanced: 36,
        advancedStr: '36%',
        google: {
          budget: '5 900,00€',
          progress: 57,
          progressStr: '57%'
        },
        facebook: {
          budget: '4 200,00€',
          progress: 43,
          progressStr: '43%'
        },
        impressions: '67 985',
        clicks: '6 582',
        conversions: '32',
        budgetSpent: '10 100,00€',
        costPerClick: '1,896€'
      }
    ]
  }
};

// *********************************************************************************************************************
export let campaignDetailFakeData = {
  campaign: {
    campaignId: 1,
    totalFranchise: 235,
    activeFranchise: 221,
    campaignName: 'Rentrée scolaire',
    advanced: 70,
    advancedStr: '70%',
    google: {
      budget: '12 876,00€'
    },
    facebook: {
      budget: '3 158,00€'
    },
    impressions: '187 987',
    clicks: '13 504',
    conversions: '89',
    budgetSpent: '16 034,00€',
    costPerClick: '1,2974€',
    franchisees: [
      {
        id: 1,
        name: "richard lenoir",
        sellPostionImg: sellPostion1Img,
        impressions: "879 698",
        mClicks: "405 910",
        clicks: "9871",
        conversions: "248",
        budget: "35 187€",
        leadCost: "2,87€"
      },
      {
        id: 2,
        name: "charonne",
        sellPostionImg: sellPostion2Img,
        impressions: "879 698",
        mClicks: "405 910",
        clicks: "9871",
        conversions: "248",
        budget: "35 187€",
        leadCost: "2,87€"
      },
      {
        id: 3,
        name: "voltaire",
        sellPostionImg: sellPostion3Img,
        impressions: "789 241",
        mClicks: "405 910",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 4,
        name: "nation",
        sellPostionNo: 4,
        impressions: "789 241",
        mClicks: "405 910",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 5,
        name: "cadet",
        sellPostionNo: 5,
        impressions: "789 241",
        mClicks: "405 910",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 6,
        name: "belleville",
        sellPostionNo: 6,
        impressions: "789 241",
        mClicks: "567 233",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 7,
        name: "etoile",
        sellPostionNo: 7,
        impressions: "789 241",
        mClicks: "405 123",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 8,
        name: "saint-germain-des-prés",
        sellPostionNo: 8,
        impressions: "789 241",
        mClicks: "456 789",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 9,
        name: "vincennes",
        sellPostionNo: 9,
        impressions: "789 241",
        mClicks: "234 910",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 10,
        name: "saint-mandé",
        sellPostionNo: 10,
        impressions: "789 241",
        mClicks: "405 345",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      },
      {
        id: 11,
        name: "boulogne",
        sellPostionNo: 11,
        impressions: "789 241",
        mClicks: "405 910",
        clicks: "8726",
        conversions: "230",
        budget: "35 000€",
        leadCost: "2,95€"
      }
    ]
  }
};