import { Component, OnInit } from '@angular/core';
import { Observable, of, from, range, Observer, interval, merge, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { take, map, filter, count, max } from 'rxjs/operators';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  status = '';
  tab: Array<number> = [];
  constructor() { }

  ngOnInit(): void {

    const subject = new ReplaySubject(0);
    subject.next(0);
    subject.subscribe({
      next: (value) => console.log(`A : ${value}`)
    });
    subject.next('bonjour');
    subject.next(2);
    subject.subscribe({
      next: (value) => console.log(`B : ${value}`)
    });
    subject.next(3);
    // const subject = new BehaviorSubject(0);
    // subject.subscribe({
    //   next: (value) => console.log(`A : ${value}`)
    // });
    // subject.next(1);
    // subject.next(2);
    // subject.subscribe({
    //   next: (value) => console.log(`B : ${value}`)
    // });
    // subject.next(3);
    // const subject = new Subject<number>();
    // subject.subscribe({
    //   next: (value) => console.log(`A : ${value}`)
    // });
    // subject.subscribe({
    //   next: (value) => console.log(`B : ${value}`)
    // });
    // const observable: Observable<number> = from([1, 2, 3]);
    // observable.subscribe(subject);
    // subject.next(1);
    // subject.next(2);
    // const observable: Observable<number> = of(1, 2, 3);
    //  const tableau = [1, 2, 3];
    // const observable: Observable<number> = from(tableau);
    // const observable: Observable<number> = interval(1000).pipe(
    //   take(10), // 0 1 2 3 4 5 6 7 8 9
    //   map(elt => elt + 2), // 2 3 4 5 6 7 8 9 10 11
    //   filter(elt => elt % 2 === 0), // 2 4 6 8 10
    //   // count(elt => elt > 5) // 3
    //   max()
    // );
    // const observable1: Observable<number> = of(1, 2, 3);
    // const observable2: Observable<number> = of(4, 5, 6);
    // const observable = merge(
    //   observable1,
    //   observable2
    // );
    // observable.subscribe(
    //   (value) => {
    //     this.tab.push(value);
    //   },
    //   (error) => {
    //     this.status = error;
    //   },
    //   () => {
    //     this.status = 'fini';
    //   }
    // );
  }

}
