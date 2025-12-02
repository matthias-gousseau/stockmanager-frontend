import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn() ? true : router.createUrlTree(['/login']);
};

export const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login').then(m => m.Login)
  },
  {
    path: 'products',
    loadComponent: () => import('./components/product-list/product-list').then(m => m.ProductList),
    canActivate: [authGuard]
  },
  {
    path: 'products/new',
    loadComponent: () => import('./components/product-form/product-form').then(m => m.ProductForm),
    canActivate: [authGuard]
  },
  {
    path: 'products/edit/:id',
    loadComponent: () => import('./components/product-form/product-form').then(m => m.ProductForm),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/products' }
];