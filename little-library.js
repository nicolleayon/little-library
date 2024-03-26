const bookList = new Map(); 

class Book {
    constructor(title, author, isAvailable = 0) {
        this.title  = title, 
        this.author = author, 
        this.isAvailable = isAvailable
    }

    getIsAvailable() {
        if(isAvailable === 0 ) {
            return "checked out";
        }
        return "on shelf";
    }
}

//helper function for addBooks
function createBook(title, author, isAvailable) {
    let newBook = new Book(title, author, isAvailable);
    return newBook;
}

/* Creates a new book and adds it to the book lists */
function addBooks (bookTitle, bookAuthor, isBookAvailable) {
    //creat new book 
    //add book to map 
    let newBook = createBook(bookTitle, bookAuthor, isBookAvailable)
    bookList.set(newBook);
}

function printBookList () {

}