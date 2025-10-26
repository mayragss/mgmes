import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: AppComponent }, // Placeholder for work page
  { path: 'about', component: AppComponent }, // Placeholder for about page
  { path: 'contact', component: AppComponent }, // Placeholder for contact page
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' }
];
