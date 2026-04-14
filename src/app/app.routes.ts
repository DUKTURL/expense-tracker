import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { ExpenseList } from './expense-list/expense-list';
import { AddExpense } from './add-expense/add-expense';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    title: 'List of Posts',
  },
  {
    path: 'expense-list',
    component: ExpenseList,
    title: 'Post Details',
  },
  {
    path: 'add-expense',
    component: AddExpense,
    title: 'Post Details',
  },
];
