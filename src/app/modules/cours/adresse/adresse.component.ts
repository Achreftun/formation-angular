import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  rue = '';
  codePostal = '';
  ville = '';
  nom = 'wick';
  prenom = 'john';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.route.queryParamMap.subscribe(
    //   (value) => {
    //     this.ville = value.get('ville');
    //     this.rue = value.get('rue');
    //     this.codePostal = value.get('codepostal');
    //   }
    // );
    this.ville = this.route.snapshot.queryParams.ville;
    this.rue = this.route.snapshot.queryParams.rue;
    this.codePostal = this.route.snapshot.queryParams.codepostal;
  }
  goToStagiaire(){
    // this.router.navigateByUrl('/stagiaire/macron/emmanuel');
    this.router.navigate(['/stagiaire', this.nom, this.prenom]);
  }
}
