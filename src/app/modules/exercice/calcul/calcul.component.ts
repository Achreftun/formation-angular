import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {
  op = '';
  value1 = 0;
  value2 = 0;
  operateur = '';
  resultat: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      res => {
        this.op = res.get('op');
        this.route.queryParamMap.subscribe(
          value => {
            this.value1 = Number(value.get('value1'));
            this.value2 = Number(value.get('value2'));
            switch (this.op) {
              case 'plus':
                this.operateur = '+';
                break;
              case 'moins':
                this.operateur = '-';
                break;
              case 'fois':
                this.operateur = '*';
                break;
              case 'div':
                this.operateur = '/';
                break;
              default:
                this.operateur = 'error';
                break;
            }
            this.resultat = eval(this.value1 + this.operateur + this.value2);
          }
        );
      }
    );
  }
}
