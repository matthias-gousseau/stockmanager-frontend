import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { ProductList } from './components/product-list/product-list';
import { ProductForm } from './components/product-form/product-form';

export const routes: Routes = [
  {
    path: '',
    component: ProductList  // page d'accueil
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'product/new',
    component: ProductForm
  },
  {
    path: '**',
    redirectTo: ''  // redirige les routes inconnues vers la page d'accueil
  }
];
