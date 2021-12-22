class Media {
  constructor(year, name) {
    this.year = year;
    this.name = name;
  }
}
class Book extends Media {
  constructor(year, name, author, price, publisher) {
    super(year, name);
    this.author = author;
    this.price = price;
    this.publisher = publisher;
  }
}

class Film extends Media {
  constructor(year, name, gener) {
    super(year, name);
    this.gener = gener;
  }
}

let Mybook = new Book(1998, "hogo", "binavayan", 48, "ofoq");
console.log(Mybook);

let Myfilm = new Film(1994, "comedy", "friends");
console.log(Myfilm);
