import { Component, EventEmitter, Output } from '@angular/core';
import { Expense, ExpenseCategory } from '../expense';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-add-expense',
  templateUrl: './add-expense.html',
})
export class AddExpense {
  title: string = '';
  amount: number | null = 0;
  category: ExpenseCategory | '' = '';

  @Output() expenseAdded = new EventEmitter<Expense>();

  addExpense(form: NgForm) {
    if (!this.title || !this.amount || !this.category) return;

    const newExpense = {
      id: crypto.randomUUID(),
      title: this.title,
      amount: this.amount,
      category: this.category,
    };

    this.expenseAdded.emit(newExpense);

    form.resetForm({
      title: '',
      amount: null,
      category: '',
    });
  }
}
