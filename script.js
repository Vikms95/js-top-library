const cardsContainerReference = document.querySelector(".cards-container");
const newBookButtonReference = document.querySelector(".new-book");

// const theHobbit = new Book("Hobbit","Tolkien","800","unread");
// const harryPotter = new Book("Harry Potter","Rowling","310","read");
// const donQuijote = new Book("Don Quijote","Cervantes","785","unread");

let myLibrary = [];

updateExistingLibrary(myLibrary);
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

function updateExistingLibrary(myLibrary){
    myLibrary.forEach(book => {
        const div = cardsContainerReference.appendChild(document.createElement("div"));
        div.classList.add("book")
        div.textContent = book.displayBookInfo();

        const button = div.appendChild(document.createElement("button"));
        button.classList.add("remove-button");
        button.textContent = "Remove book"
    });
}

function addBookToLibrary(){
    const bookTitle = window.prompt("Enter the book's name: ");
    const bookAuthor = window.prompt("Enter book's author: ");
    const bookPages = window.prompt("Enter book's number of pages: ");
    const bookReadState = window.prompt("Have you finished this book?: ");

    const book = new Book(bookTitle,bookAuthor,bookPages,bookReadState)
    myLibrary.push(book);
    return book;
}

function removeBookFromLibrary(){
}

function addEventListenerNewButton(){
    newBookButtonReference.addEventListener("click", () => {
        const bookToAdd = addBookToLibrary()
        displayNewBook(bookToAdd);
    });
}

function displayNewBook(bookToAdd){
    const div = cardsContainerReference.appendChild(document.createElement("div"));
    div.classList.add("book");
    div.textContent = bookToAdd.displayBookInfo();

    const readButton = div.appendChild(document.createElement("button"));
    readButton.classList.add("read-button");
    readButton.textContent = bookToAdd.readState;
    readButton.addEventListener("click", () => {
        if(readButton.textContent === "Unread"){
            readButton.textContent = "Read";
        }else{
            readButton.textContent = "Unread"
        }
        
    })

    const removeButton = div.appendChild(document.createElement("button"));
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove book";
    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove();
    })  
}