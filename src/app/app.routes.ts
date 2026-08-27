import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', loadComponent: () => import('./pages/about/about-page').then(m => m.AboutPageComponent) },
  { path: 'servicos', loadComponent: () => import('./pages/services/services-page').then(m => m.ServicesPageComponent) },
  { path: 'contato', loadComponent: () => import('./pages/contact/contact-page').then(m => m.ContactPageComponent) }
];
