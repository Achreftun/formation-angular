import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  numbers = [2, 3, 8, 1];
  id = 0;
  next = 0;
  previous = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.id = Number(value.get('id'));
        this.next = (this.id + 1) % this.numbers.length;
        this.previous = (this.id + this.numbers.length - 1) % this.numbers.length;
      }
    );
  }

}
