import { Component } from '@angular/core';
import { Personne } from './classes/personne';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  couleur = 'red';
  title = 'angular9';
  personne: Personne = new Personne(100, 'wick', 'john');
  tab: Array<number> = [3, 10, 12, 17];
  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Abruzzi', 'John'),
    new Personne(102, 'Marley', 'Bob'),
    new Personne(103, 'Segal', 'Steven')
  ];
  direBonjour() {
    return 'Bonjour';
  }
}
