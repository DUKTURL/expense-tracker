import { Component, Input } from '@angular/core';
import { Expense } from '../expense';
import { ExpenseItem } from '../expense-item/expense-item';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  @Input() items: Expense[] = [];
}