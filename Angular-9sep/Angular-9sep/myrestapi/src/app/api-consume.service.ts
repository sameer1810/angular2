import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {
  API_KEY = 'myapikey'
  constructor(private http: HttpClient) { }

  public consumeApi(){
    return this.http.get(`http://localhost:9100/conv/fromINR/to/EUR?apikey=${this.API_KEY}`)
  }
}

