import { Injectable } from '@angular/core';
import { Book } from './book';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private loggerService: LoggerService) {
    this.loggerService.log("Book Service instantiated");
   }

  public getBooks() {
    this.loggerService.log("getBooks() called");
    let books:Book[];
    books=[
       new Book(100,'The Secret', 600),
       new Book(101,'The Poster', 600),
       new Book(102,'The Complete Java Reference', 799),
       new Book(103,'The Good Samaritan', 300),
       new Book(104, 'ItsOK to fail, my Son',400)
      ]

    this.loggerService.log(books);
    return books;
  }
}
