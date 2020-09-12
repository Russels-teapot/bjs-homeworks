class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    fix(){
        this.state = this.state*1.5
    }
    set state(value) {
        if (value < 0) {
            return this._state = 0
        }
        if (value > 100) {
            return this._state = 100
        }
        return this._state = value;
    }
    get state(){
        return this._state
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
    }
};

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount)
        this.type = "book";
        this.author = author;
    }
};

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "novel";
        this.author = author;
    }
};

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic";
        this.author = author;
    }
};

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount)
        this.type = "detective";
        this.author = author;
    }
}


class Library {
    constructor(title) {
        this.title = title;
        this.books = []
    }
    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book)
        }
        else console.log("Книга сильно повреждена")
    }
    findBookBy(type, value) {
        let searchedBook = this.books.find((item) => item[type] === value)
        return searchedBook
    }
    giveBookByName(bookname) {
        let neededBook = this.books.find((item) => item.name === bookname)
        if (neededBook) {
            this.books.splice(this.books.indexOf(neededBook), 1);return neededBook
        }
        else return null
    }
}

