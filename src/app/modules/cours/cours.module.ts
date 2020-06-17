import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursRoutingModule } from './cours-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { AdresseComponent } from './adresse/adresse.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormComponent } from './form/form.component';
import { PersonneComponent } from './personne/personne.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ObservableComponent,
    AdresseComponent,
    StagiaireComponent,
    FormulaireComponent,
    FormComponent,
    PersonneComponent,

  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CoursModule { }
