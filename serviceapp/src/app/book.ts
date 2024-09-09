export class Book {
  constructor(bookId: number, title: string, price: number){
    this.bookId = bookId;
    this.title = title;
    this.price = price;
  }

  bookId:number;
  title:string;
  price:number;

}
