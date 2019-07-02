import { Component } from '@angular/core';
import { BudgetDataService } from '../budget-data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  budgetData = [];
  constructor( private budgetService: BudgetDataService) {
    this.budgetData =  this.budgetService.get_data();
  }
}
