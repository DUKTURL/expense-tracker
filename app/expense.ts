import { Injectable, signal } from '@angular/core';
import { Expense } from './expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  addExpense(expense: Expense) {
    this.expenses.update((list) => [...list, expense]);
  }

  updateExpense(id: string, updated: Partial<Expense>) {
    this.expenses.update((list) => list.map((e) => (e.id === id ? { ...e, ...updated } : e)));
  }

  deleteExpense(id: string) {
    this.expenses.update((list) => list.filter((expense) => expense.id !== id));
  }
}
