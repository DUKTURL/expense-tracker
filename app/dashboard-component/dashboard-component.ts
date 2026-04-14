import { Component, computed, inject } from '@angular/core';
import { ExpenseService } from '../expense';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  private expenseService = inject(ExpenseService);

  numberOfExpenses = computed(() => {
    return this.expenseService.expenses().length;
  });

  totalExpenses = computed(() => {
    const expenses = this.expenseService.expenses();

    return expenses.reduce((sum, e) => sum + e.amount, 0);
  });

  highestExpense = computed(() => {
    const tempExpenses = this.expenseService.expenses();

    if (tempExpenses.length === 0) return 0;

    return tempExpenses.reduce((max, e) => (e.amount > max ? e.amount : max), tempExpenses[0].amount);
  });

  averageExpense = computed(() => {
    const tempExpenses = this.expenseService.expenses();

    if (tempExpenses.length === 0) return 0;

    const total = tempExpenses.reduce((sum, e) => sum + e.amount, 0);
    return total / tempExpenses.length;
  });
}
