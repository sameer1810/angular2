import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fetchapi';
  private url: string = 'http://jsonplaceholder.typicode.com/users';

  status: string = 'loading';
  data: any[] = [];

  ngOnInit(): void {
    fetch(this.url)
      .then((response) => response.json())
      .then((quotesData) => {
        this.status = 'ready';
        this.data = quotesData;
      })
      .catch((error) => {
        this.status = 'error';
        console.error('There was an error!', error);
      });
  }
}
