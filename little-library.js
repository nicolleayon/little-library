const prompt = require('prompt-sync')({sigint: true});


// Array bookList, will hold Book objects
const bookList = new Array(); 

class Book {
    constructor(title, author = "Unknown", isAvailable = 1) {
        this.title  = title, 
        this.author = author, 
        this.isAvailable = isAvailable
    }

    getBookTitle() {
        return this.title;
    }

    getBookAuthor() {
        return this.author;
    }

    getIsAvailable() {
        if(this.isAvailable === 0 ) {
            return "checked out";
        }
        return "on shelf";
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

//Helper function for addBook(): Creates a new book object using Book class and return it
function createBook(title, author, isAvailable) {
    let newBook = new Book(title, author, isAvailable);
    return newBook;
}

/* Creates a new book and adds it to the book lists */
function addBook (bookTitle, bookAuthor, isBookAvailable) {
    //creat new book 
    //add book to map 
    let newBook = createBook(bookTitle, bookAuthor, isBookAvailable);
    bookList.push(newBook);
}

/* Prints out book title and status from array BookList */
function printBookList () {  
    bookList.forEach((book) => {
        console.log(book.getBookTitle() + ", " + book.getIsAvailable());
    });
}

/* Toggles the status of a book with specified parameter 'title' in bookList array */
function toggleAvailability(title){
    //iterate through array of object, look into each object and see if title matches 
    for(let book of bookList){
        if (book.getBookTitle() === title){
            book.toggleBookStatus();
        }
    }
}

//Interact with user to let user: printBookList(), addBook(), toggleAvailability()
function Main(){
    let name = prompt("Welcome to the little library. What is your name? ");
    let options = Number(0); 
    console.log(`Nice to meet you ${name}!`);

    while (options !== 4){
        console.log("What would you like to do? \n1: Print list of books \n2: Add a book \n3: Toggle book availability status \n4: EXIT");
        options = prompt("Enter choice: ");
        options = Number(options);
        console.log("OPTION SELECTED: " + options);

        while(options !== 1 && options !== 2 && options !== 3 && options !== 4){
            console.log("Invalid choice. Please select number from the list: 1, 2, 3, or 4: ");
            options = prompt("Enter choice: ");
            options = Number(options);
        }

        switch (options) {
            case 1: 
                //Print list of books
                console.log("*** BOOK LIST ***\n");
                printBookList(); s
                console.log("");
                break;
            case 2:
                //Add a book
                let bookTitle = prompt("Please enter the title of the book: ");
                let bookAuthor = prompt("Please enter the author of the book: ");
                    if(bookAuthor == ""){
                        bookAuthor = "Unknown";
                    }
                let bookStatus = prompt("Please enter '1' if book is available. Otherwise, please enter '0' if the book is checked out: ");
                addBook(bookTitle, bookAuthor, bookStatus);
                //confirm added book
                for(let book of bookList){
                    if (book.getBookTitle() === bookTitle && 
                            book.getBookAuthor() === bookAuthor){
                        console.log("BOOK ADDED: " + book.getBookTitle() + ", Author: " + book.getBookAuthor() + ", " + book.getIsAvailable());
                    }
                }
                break;
            case 3:
                //Toggle book availability status
                bookTitle = prompt("What is the title of the book you want to toggle availability for?");
                toggleAvailability(bookTitle);
                break; 
            default: 
                console.log("Goodbye!");
        }
    }

 
    
}


// RUN PROGRAM
Main();
