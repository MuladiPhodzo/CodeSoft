import { Routes } from '@angular/router';
import path from 'path';  // Importing path for resolving paths
import { NgModule } from '@angular/core'; // Importing NgModule for module definition
import { RouterModule } from '@angular/router'; // Importing RouterModule for routing

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  {path: 'product', loadComponent: () => import('./pages/product/product.component').then(m => m.ProductComponent)},
  {path: 'cart', loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent)},
  {path: 'favourites', loadComponent: () => import('./pages/favourites/favourites.component').then(m => m.FavouritesComponent)},
  {path: 'profile', loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)},
  {path: 'orders', loadComponent: () => import('./pages/orders/orders.component').then(m => m.OrdersComponent)},
  {path: 'checkout', loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent)},
  {path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)},
  {path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent)},
  {path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
  {path: '**', redirectTo: 'home'}, // Wildcard route for a 404 page
];
