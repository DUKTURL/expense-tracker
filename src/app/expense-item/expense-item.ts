import { Component, Input } from '@angular/core';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.html',
})
export class ExpenseItem {
  @Input() expense!: Expense;
}
