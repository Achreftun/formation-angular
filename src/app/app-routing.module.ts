import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErrorComponent } from './composants/error/error.component';

const routes: Routes = [
  {
    path: 'vehicule',
    loadChildren: () => import('./modules/vehicule/vehicule.module').then(m => m.VehiculeModule)
  },
  {
    path: 'cours',
    loadChildren: () => import('./modules/cours/cours.module').then(m => m.CoursModule)
  },
  {
    path: 'exercice',
    loadChildren: () => import('./modules/exercice/exercice.module').then(m => m.ExerciceModule)
  },
  { path: '', redirectTo: '/cours/stagiaire', pathMatch: 'full'},
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
