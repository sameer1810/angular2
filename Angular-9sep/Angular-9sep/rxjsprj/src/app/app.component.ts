import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  /*obs = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.next(4);
    observer.next(5);
    observer.next(6);
    observer.next(7);
    observer.complete();
  }).pipe(
    filter(data => data %2 ==0 ),
    map( (val) => {return val as number*2 }),)

  data: number[] = []; */

  obs$: Observable<number> = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(
    filter(x => x > 6),
    map(x => x*x)
  );

ngOnInit() {
  this.obs$.subscribe(
    next => console.log('next:', next),
    err => console.log('error:', err),
    () => console.log('completed')
  );
}
}
