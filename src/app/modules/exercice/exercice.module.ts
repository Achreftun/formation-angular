import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciceRoutingModule } from './exercice-routing.module';
import { CalculComponent } from './calcul/calcul.component';
import { TableauComponent } from './tableau/tableau.component';
import { CalculetteComponent } from './calculette/calculette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForumComponent } from './forum/forum.component';


@NgModule({
  declarations: [
    CalculComponent,
    TableauComponent,
    CalculetteComponent,
    ForumComponent
  ],
  imports: [
    CommonModule,
    ExerciceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ExerciceModule { }
