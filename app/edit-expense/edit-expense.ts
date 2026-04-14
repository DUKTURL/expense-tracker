import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../expense';
import { Expense, ExpenseCategory } from '../expense.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-expense',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-expense.html',
  styleUrl: './edit-expense.css',
})
export class EditExpense {
  expense?: Expense;

  editTitle = '';
  editAmount: number | null = null;
  editCategory: ExpenseCategory | null = null;

  constructor(
    private route: ActivatedRoute,
    private expenseService: ExpenseService,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.expense = this.expenseService.expenses().find((e) => e.id === id);

    if (this.expense) {
      this.editTitle = this.expense.title;
      this.editAmount = this.expense.amount;
      this.editCategory = this.expense.category;
    }
  }

  saveExpense() {
    if (!this.expense) return;

    this.expenseService.updateExpense(this.expense.id, {
      title: this.editTitle,
      amount: this.editAmount!,
      category: this.editCategory!,
    });

    this.router.navigate(['/']);
  }
}
