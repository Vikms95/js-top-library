const cardsContainerReference = document.querySelector(".cards-container");
const newBookButtonReference = document.querySelector(".new-book");

const theHobbit = new Book("Hobbit","Tolkien","800","unread");
const harryPotter = new Book("Harry Potter","Rowling","310","read");
const donQuijote = new Book("Don Quijote","Cervantes","785","unread");

let myLibrary = [theHobbit,harryPotter,donQuijote];

displayExistingLibrary(myLibrary);
addEventListenerNewButton();

function Book(title, author, pages, readState) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;
    this.displayBookInfo = function(){
        return this.title 
                + " by " + this.author 
                + ", has " + this.pages + " pages, " 
                + " and right now it's state is " + this.readState

    } 
}

function addBookToLibrary(){
    const bookTitle = window.prompt("Enter the book's name: ");
    const bookAuthor = window.prompt("Enter book's author: ");
    const bookPages = window.prompt("Enter book's number of pages: ");
    const bookReadState = window.prompt("Have you finished this book?: ") ;

    const book = new Book(bookTitle,bookAuthor,bookPages,bookReadState)
    myLibrary.push(book);
    return book;
}

function displayExistingLibrary(myLibrary){
    myLibrary.forEach(book => {
        const div = cardsContainerReference.appendChild(document.createElement("div"));
        div.classList.add("book")
        div.textContent = book.displayBookInfo();
    });
}

function addEventListenerNewButton(){
    newBookButtonReference.addEventListener("click", () => {
        const bookToAdd = addBookToLibrary()
        const div = cardsContainerReference.appendChild(document.createElement("div"));
        div.classList.add("book");
        div.textContent = bookToAdd.displayBookInfo();
    });
}