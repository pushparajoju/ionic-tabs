import { Component } from '@angular/core';
import { BudgetDataService } from '../budget-data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  budgetExpertData = [];
  constructor(private budgetExpertOpinion : BudgetDataService) {
    this.budgetExpertData =  this.budgetExpertOpinion.get_expert_opinion();
  }

}
