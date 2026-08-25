import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', loadComponent: () => import('./pages/about/about-page').then(m => m.AboutPageComponent) }
];
