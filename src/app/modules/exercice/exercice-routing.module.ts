import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculComponent } from './calcul/calcul.component';
import { TableauComponent } from './tableau/tableau.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { ForumComponent } from './forum/forum.component';


const routes: Routes = [
  { path: 'calcul/:op', component: CalculComponent },
  { path: 'tableau/:id', component: TableauComponent },
  { path: 'calculette', component: CalculetteComponent },
  { path: 'forum', component: ForumComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExerciceRoutingModule { }
