import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: '**', component: NotFoundComponent }
];


