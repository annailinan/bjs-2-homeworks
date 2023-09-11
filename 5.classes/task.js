class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
      }
      set state(newState) {
        if (newState < 0) {
          this._state = 0;
        } else if (newState > 100) {
          this._state = 100;
        } else {
          this._state = newState;
        }
      }
      get state() {
        return this._state;
      }
    }
    class Magazine extends PrintEditionItem {
        constructor (name, releaseDate, pagesCount){
            super (name, releaseDate, pagesCount)
            this.type = "magazine";
        }
    }
    class Book extends PrintEditionItem {
        constructor (author, name, releaseDate, pagesCount) {
            super (name, releaseDate, pagesCount)
            this.author = author;
            this.type = "book";
        }
    }
    class NovelBook extends Book {
        constructor (author, name, releaseDate, pagesCount) {
            super (author, name, releaseDate, pagesCount)
            this.type = "novel";
        }
    }
    class FantasticBook extends Book {
        constructor (author, name, releaseDate, pagesCount) {
            super (author, name, releaseDate, pagesCount)
            this.type = "fantastic";
        }
    }
    class DetectiveBook extends Book {
        constructor (author, name, releaseDate, pagesCount) {
            super (author, name, releaseDate, pagesCount)
            this.type = "detective";
        }
    }
    class Library {
        constructor(name) {
          this.name = name;
          this.books = [];
        }

        addBook(book) {
          if (book.state > 30) {
            this.books.push(book);
          }
        }

        findBookBy(type, value) {
          const book = this.books.find(book => book[type] === value);
          return book || null;
        }

        giveBookByName(bookName) {
          const foundBook = this.findBookBy("name", bookName);
          if (foundBook) {
            this.books.splice(foundBook);
            }
            return foundBook;
          }
      }
      class Student {
      	constructor(name) {
      		this.name = name;
      		this.marks = {};
      	}

      	addMark(mark, subject) {
      		if(mark < 2 || mark > 5) {
      			console.log("Оценка должна быть не менее 2 и не более 5");
      			return;
      		}
      		if(!this.marks[subject]) {
      			this.marks[subject] = [];
      		}
      		this.marks[subject].push(mark);
      	}

      	getAverageBySubject(subject) {
      		if(!this.marks[subject]) {
      			console.log("Оценок по предмету не найдено " + subject);
      			return 0;
      		}
      		return this.marks[subject].reduce((acc, mark) => acc + mark / this.marks[subject].length, 0);
      	}

      	getAverage() {
      		const subjects = Object.keys(this.marks);
      		if (subjects.length === 0) {
      			return 0;
      		}
      		return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject) / subjects.length, 0);
      	}
      }