import {
  sellPostion1Img,
  sellPostion2Img,
  sellPostion3Img,
  laSemaineImg,
  festivitiesImg,
  saintValentinImg
} from '../_helpers';

// ********************************************************************************************************************* 
export let homeCampaignSalesTopFakeData = {
  campaignSales: [{
      id: 1,
      sellPostionImg: sellPostion1Img,
      agencyName: 'Visiperf Charles de Gaulle',
      campaignName: 'Tremblay-en-France',
      impressions: '1 879 048',
      clicks: '187 964',
      conversions: '1 568',
      budgetSpent: '35 187€',
      costPerClick: '2,87€'
    },
    {
      id: 2,
      sellPostionImg: sellPostion2Img,
      agencyName: 'Visiperf Charles de Gaulle',
      campaignName: 'Tremblay-en-France',
      impressions: '1 879 048',
      clicks: '187 964',
      conversions: '1 568',
      budgetSpent: '35 187€',
      costPerClick: '2,87€'
    },
    {
      id: 3,
      sellPostionImg: sellPostion3Img,
      agencyName: 'Visiperf Marseille Prado',
      campaignName: 'Marseille 13008',
      impressions: '1 879 048',
      clicks: '187 964',
      conversions: '2 487',
      budgetSpent: '35 187€',
      costPerClick: '2,87€'
    },
    {
      id: 4,
      sellPostionNo: 4,
      agencyName: 'Visiperf Merignac',
      campaignName: 'Bordeaux 33700',
      impressions: '1 879 048',
      clicks: '187 964',
      conversions: '1 568',
      budgetSpent: '68 785€',
      costPerClick: '2,87€'
    },
    {
      id: 5,
      sellPostionNo: 5,
      agencyName: 'Visiperf Paris Menilmontant',
      campaignName: 'Paris 75020',
      impressions: '1 879 048',
      clicks: '187 964',
      conversions: '1 568',
      budgetSpent: '35 187€',
      costPerClick: '2,87€'
    }
  ]
};

// *********************************************************************************************************************
export let campaignsFakeData = {
  campaigns: {
    inProgress: [{
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
    future: [{
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
    }],
    past: [{
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
    franchisees: [{
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

// *********************************************************************************************************************
export let conversionsFakeData = {
  myFormsConversions: [{
      id: 1,
      dt: "01-05-2018",
      customerName: "Richard lenoir",
      name: "Nenot",
      firstName: "Baptiste",
      email: "baptiste.nenot@gmail.com",
      mobileStr: "01 98 76 85 78",
      mobile: "0198768578",
      society: "visiperf",
      messageShort: "Lorem ipsum dolor sit amet, sectetur...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 2,
      dt: "31-04-2018",
      customerName: "cadet",
      name: "Marie",
      firstName: "Rosalie",
      email: "rosalie.marie@gmail.com",
      mobileStr: "06 58 65 87 26",
      mobile: "0658658726",
      society: "orixa media",
      messageShort: "In hac habitasse platea dictumst que...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 3,
      dt: "31-04-2018",
      customerName: "voltaire",
      name: "boulanger",
      firstName: "adrien",
      email: "baptiste.nenot@gmail.com",
      mobileStr: "07 89 54 21 30",
      mobile: "0789542130",
      society: "carglass",
      messageShort: "Lorem ipsum dolor sit amet, sectetur...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 4,
      dt: "31-04-2018",
      customerName: "cadet",
      name: "Marie",
      firstName: "Rosalie",
      email: "rosalie.marie@gmail.com",
      mobileStr: "06 58 65 87 26",
      mobile: "0658658726",
      society: "orixa media",
      messageShort: "In hac habitasse platea dictumst que...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 5,
      dt: "28-04-2018",
      customerName: "nation",
      name: "Guillaume",
      firstName: "katell",
      email: "kguillaume@gmail.com",
      mobileStr: "01 55 48 32 36",
      mobile: "0155483236",
      society: "N/R",
      messageShort: "Suspendisse non nulla a sem efficitus...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 6,
      dt: "31-04-2018",
      customerName: "cadet",
      name: "Marie",
      firstName: "Rosalie",
      email: "rosalie.marie@gmail.com",
      mobileStr: "06 58 65 87 26",
      mobile: "0658658726",
      society: "orixa media",
      messageShort: "In hac habitasse platea dictumst que...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 7,
      dt: "31-04-2018",
      customerName: "voltaire",
      name: "boulanger",
      firstName: "adrien",
      email: "baptiste.nenot@gmail.com",
      mobileStr: "07 89 54 21 30",
      mobile: "0789542130",
      society: "carglass",
      messageShort: "Lorem ipsum dolor sit amet, sectetur...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    }
  ],
  myAppealsConversions: [{
      id: 1,
      dt: "01-05-2018",
      customerName: "Richard lenoir",
      name: "Nenot",
      firstName: "Baptiste",
      email: "baptiste.nenot@gmail.com",
      mobileStr: "01 98 76 85 78",
      mobile: "0198768578",
      society: "visiperf",
      messageShort: "Lorem ipsum dolor sit amet, sectetur...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    },
    {
      id: 2,
      dt: "31-04-2018",
      customerName: "cadet",
      name: "Marie",
      firstName: "Rosalie",
      email: "rosalie.marie@gmail.com",
      mobileStr: "06 58 65 87 26",
      mobile: "0658658726",
      society: "orixa media",
      messageShort: "In hac habitasse platea dictumst que...",
      message: {
        title: "Demande de devis de Baptiste Nenot :",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac molestie nibh. In hac habitasse platea dictumst. Quisque pretium purus vel vehicula tincidunt. Proin ut molestie justo. Morbi at leo ac orci faucibus vehicula. Praesent porttitor egestas mauris, nec maximus ex. Sed id lobortis lorem. Suspendisse non nulla a sem efficitur cursus consectetur et neque. Vestibulum lorem tellus, blandit at est eget, efficitur condimentum velit."
      }
    }
  ]
}

// *********************************************************************************************************************
export let headerCartFakeData = {
  cartItems: [{
      itemId: 0,
      itemName: 'Fêtes de fin d’années',
      itemImg: festivitiesImg,
      itemQuantity: 2
    },
    {
      itemId: 1,
      itemName: 'Saint Valentin',
      itemImg: saintValentinImg,
      itemQuantity: 1
    }
  ]
};

export let cartFakeData = {
  orderData: [{
    id: 1,
    recipientName: "Visiperf (Moi)",
    recipientEmail: "matthieu@visiperf.com",
    items: [{
      id: 1,
      name: "La semaine du goût",
      image: laSemaineImg,
      unitPrice: "150,00€",
      quantity: 1,
      total: "300,00€"
    }, {
      id: 1,
      name: "Fêtes de fin d’année 2018",
      image: festivitiesImg,
      unitPrice: "150,00€",
      quantity: 1,
      total: "300,00€"
    }]
  }, {
    id: 2,
    recipientName: "Visiperf Voltaire",
    recipientEmail: "jerome-voltaire@visiperf.com",
    items: [{
      id: 1,
      name: "La semaine du goût",
      image: laSemaineImg,
      unitPrice: "150,00€",
      quantity: 1,
      total: "300,00€"
    }, {
      id: 1,
      name: "Fêtes de fin d’année 2018",
      image: festivitiesImg,
      unitPrice: "150,00€",
      quantity: 1,
      total: "300,00€"
    }]
  }],
  orderRecipients: [{
      id: 1,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 2,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 3,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 4,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 5,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 6,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 7,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    },
    {
      id: 8,
      name: "Visiperf voltaire",
      email: "jeremy@visiperf-voltaire.com"
    }
  ]
}