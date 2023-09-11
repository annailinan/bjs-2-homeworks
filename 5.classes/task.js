//1 задание

class PrintEditionItem {

    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    };

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    };

    get state() {
        return this._state;
    };

    fix() {
        this.state = this.state / 100 * 150;
    };
};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type);
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
};


const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// 2 задание

class Library {

    constructor(name = "string", books = []) {
        this.name = name;
        this.books = books;
    };

    addBook(book) {
        if (this._state < 30) {

        } else {

            this.books.push(book);

        }
    };

    findBookBy(type, value) {

        for (let element of this.books) {
            if (element[type] === value) {
                return element;
            }

        }

        return null;

    };

    giveBookByName(bookName) {

        let giveBook = [];

        for (let element of this.books) {

            if (element.name === bookName) {

                giveBook = this.books.splice(this.books.indexOf(element), 1);
                return giveBook[giveBook.indexOf(element)];

            } else if (giveBook.name === bookName) {

                for (let element of giveBook) {

                    if (element.name === bookName) {

                        this.books.push(giveBook.splice(giveBook.indexOf(element), 1));

                    }
                }
            };
        };

        return null;

    };

};

const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);
library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

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