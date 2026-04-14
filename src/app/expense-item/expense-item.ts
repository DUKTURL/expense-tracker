import { Component, Input } from '@angular/core';
import { Expense } from '../expense.model';
import { ExpenseService } from '../expense';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.html',
})
export class ExpenseItem {
  @Input() expense!: Expense;

  constructor(
    private expenseService: ExpenseService,
    private router: Router,
  ) {}
  
  deleteExpense() {
    this.expenseService.deleteExpense(this.expense.id);
  }

  editExpense() {
    this.router.navigate(['/edit-expense', this.expense.id]);
  }
}
