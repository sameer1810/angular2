import { Component, OnInit } from '@angular/core';
import { ApiConsumeService } from '../api-consume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  convmultiple: any;

  constructor(private apiService: ApiConsumeService) { }

  ngOnInit(): void {
    this.apiService.consumeApi().subscribe((data) => {
      this.convmultiple = data;
    });
  }
}
