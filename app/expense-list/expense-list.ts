import { Component } from '@angular/core';
import { ExpenseService } from '../expense';
import { ExpenseItem } from '../expense-item/expense-item';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  constructor(public expenseService: ExpenseService) {}
}
