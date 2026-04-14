import { Component, EventEmitter, Output } from '@angular/core';
import { Expense, ExpenseCategory } from '../expense.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ExpenseService } from '../expense';

@Component({
  imports: [FormsModule],
  selector: 'app-add-expense',
  templateUrl: './add-expense.html',
})
export class AddExpense {
  title: string = '';
  amount: number | null = 0;
  category: ExpenseCategory | '' = '';

  constructor(private expenseService: ExpenseService) {}

  addExpense(form: NgForm) {
    if (!this.title || !this.amount || !this.category) return;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category,
    };

    this.expenseService.addExpense(newExpense);

    form.resetForm({
      title: '',
      amount: null,
      category: '',
    });
  }
}
