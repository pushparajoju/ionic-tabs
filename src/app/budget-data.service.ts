import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetDataService {

  budgetHighlightsData = [
    "He said through the world’s largest healthcare programme, Ayushman Bharat, to provide medical treatment to nearly 50 crore people in the country,  around 10 lakh patients have already benefited through free treatment for medical treatment which would have otherwise cost them Rs. 3,000 crore. Lakhs of poor and middle class people are also benefiting from reduction in the prices of essential medicines, cardiac stents and knee implants, and availability of medicines at affordable prices through Pradhan Mantri Jan Aushadhi Kendras, the Finance Minister added.",
    "By March, 2019, all households will be provided with electricity connection.  Till now, 143 crore LED bulbs have been provided in a mission mode which has resulted in saving of Rs.50,000 crore for the poor and middle class.",
    "Pradhan Mantri Gram Sadak Yojana (PMGSY) is being allocated Rs.19,000 crore in BE 2019-20 as against Rs.15,500 crore in RE 2018-19. During the period 2014-18, a total number of 1.53 crore houses have been built under the Pradhan Mantri Awas Yojana, he announced.",
    "Announcing an allocation of Rs.60,000 crores for MGNREGA for Budget Estimates 2019-20,  the Finance Minister said that additional allocations will be made, if required.",
    "Shri Goyal also said that 14 of the 21 AIIMS operating or being established in the country presently have been announced since 2014. He also announced setting up of a new - the 22nd AIIMS in Haryana."
  ];
  budgetExpertsOpinion = [
    { "image" : "https://avatars0.githubusercontent.com/u/4?v=4",
      "opinion": "If the government is looking for a silver bullet in an election year, when the threat of jobless growth is rearing its head, injecting liquidity into the real estate/ construction industry, the biggest generator of jobs the last 25 years, is one of the most viable options. An election year interim budget is normally not something that the industry looks forward to as its agenda tends to be election focused (at the cost of industry). The industry is hoping that this year we are in for a pleasant surprise. The Budget has addressed concerns of farmers and the salaried class by providing relief to small and marginal farmers up to 75 thousand crores and interest subvention up to 5% in the event of natural calamity and; secondly exempting income tax for income up to 5 lakhs. Both these are significantly consumption positive and augur well for overall tax collections in FY 20. While there is a marginal slippage in fiscal deficit target for FY 19, the approach towards consolidation has been diluted for FY20 on account of farmer relief. The net borrowing programme doesn't appear alarmingly high. Overall a good budget that delivered on expectations in an election year." 
    },
    { "image" : "https://avatars0.githubusercontent.com/u/4?v=4",
    "opinion": "In the light of the elections, this is a budget with mass-appeal and yet the government has been cognizant of the fiscal deficit levels." 
  },
  { "image" : "https://avatars0.githubusercontent.com/u/4?v=4",
  "opinion": "In the light of the elections, this is a budget with mass-appeal and yet the government has been cognizant of the fiscal deficit levels." 
},
{ "image" : "https://avatars0.githubusercontent.com/u/4?v=4",
"opinion": "In the light of the elections, this is a budget with mass-appeal and yet the government has been cognizant of the fiscal deficit levels." 
}
  ];

  constructor() {}

  get_data(){
    return this.budgetHighlightsData;
  }
  get_expert_opinion() {
    return this.budgetExpertsOpinion;
  }
}



