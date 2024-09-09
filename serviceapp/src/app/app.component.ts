import { Component } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService, LoggerService]
})
export class AppComponent {
  title = 'serviceapp';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.books = this.bookService.getBooks();
  }
}
