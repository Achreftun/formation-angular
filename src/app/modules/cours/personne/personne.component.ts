import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../services/personne.service';
import { Personne } from 'src/app/interfaces/personne';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
  personnes: Array<Personne> = [];
  personne: Personne = {};

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.recupererPersonnes();
  }
  ajouterPersonne() {
    this.personneService.addPerson(this.personne).subscribe(() => {
      this.recupererPersonnes();
    }
    );
  }
  recupererPersonnes() {
    this.personneService.getAll().subscribe(
      (value) => {
        this.personnes = value;
      }
    );
  }
}
