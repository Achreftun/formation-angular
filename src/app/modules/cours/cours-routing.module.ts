import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';


const routes: Routes = [
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'adresse', component: AdresseComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'form', component: FormComponent },
  { path: 'personne', component: PersonneComponent },
  { path: 'trainee', redirectTo: '/stagiaire' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
