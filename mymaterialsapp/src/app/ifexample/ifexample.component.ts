import { Component } from '@angular/core';

@Component({
  selector: 'app-ifexample',
  templateUrl: './ifexample.component.html',
  styleUrl: './ifexample.component.css'
})
export class IfexampleComponent {
books : Book[] = [
  {title: 'Secret', genre:'selfhelp'},
  {title: 'Power', genre:'selfhelp'},
  {title: 'The kite Runner', genre:'fiction'},

]

  show:boolean = true;

  n1 : number = 100;
  n2 : number = 50;

  addNumbers($event: Event): void {
    console.log("Sum button clicked");
    console.log(this.n1 + this.n2);
    console.log($event);
  }
}

class Book {
  title : string = "";
  genre : string = ""
}
