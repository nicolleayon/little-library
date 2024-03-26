// console.log("Hello");
const bookList = new Array(); 

class Book {
    constructor(title, author, isAvailable = 1) {
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

    toggleBookStatus(){
        if(this.isAvailable === 0){
            this.isAvailable = 1;
        }
        if(this.isAvailable === 1){
            this.isAvailable = 0;
        }
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

function toggleAvailability(title){
    //iterate through array of object, look into each object and see if title matches 
    for(let book of bookList){
        if (book.getBookTitle() === title){
            book.toggleBookStatus();
        }
    }
}



/* TESTS */
addBooks("Brown Bear", "", 1);
addBooks("The Little Prince", "", 0);
printBookList(); 
toggleAvailability("Brown Bear");
printBookList(); 