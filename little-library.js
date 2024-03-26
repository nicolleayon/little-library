// console.log("Hello");
const bookList = new Array(); 

class Book {
    constructor(title, author, isAvailable = 0) {
        this.title  = title, 
        this.author = author, 
        this.isAvailable = isAvailable
    }

    getIsAvailable() {
        if(this.isAvailable === 0 ) {
            return "checked out";
        }
        return "on shelf";
    }

    getBookTitle() {
        return this.title;
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
    let newBook = createBook(bookTitle, bookAuthor, isBookAvailable);
    bookList.push(newBook);
}

function printBookList () {
      
    bookList.forEach((book) => {
        console.log(book.getBookTitle() + ", " + book.getIsAvailable());
    });
}


// addBooks 

addBooks("Brown Bear", "", 1);
addBooks("The Little Prince", "", 0);
printBookList(); 