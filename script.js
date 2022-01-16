const cardsContainerReference = document.querySelector(".cards-container");
const newBookButtonReference = document.querySelector(".new-book");

const theHobbit = new Book("Hobbit","Tolkien","800","unread");
const harryPotter = new Book("Harry Potter","Rowling","310","read");
const donQuijote = new Book("Don Quijote","Cervantes","785","unread");

let myLibrary = [theHobbit,harryPotter,donQuijote];

updateExistingLibrary(myLibrary);
addEventListenerNewButton();

function Book(title, author, pages, readState){   
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readState = readState;
    this.displayBookInfo = function(){
        return this.title 
                + " by " + this.author 
                + ", has " + this.pages + " pages, " 
                + " and right now it's state is: "

    } 
};

function updateExistingLibrary(myLibrary){
    let div;

    if(Array.isArray(myLibrary)){
        myLibrary.forEach(book => {
            div = addBookToDiv(book);
            addReadButton(div,book);
            addRemoveButton(div);
        })
    }
    else
    {
        div = addBookToDiv(myLibrary);
        addReadButton(div,myLibrary);
        addRemoveButton(div);
    };
};

function addEventListenerNewButton(){
    newBookButtonReference.addEventListener("click", () => {
        const bookToAdd = addBookToLibraryList()
        updateExistingLibrary(bookToAdd);
    });
};

function addBookToLibraryList(){
    const bookTitle = window.prompt("Enter the book's name: ");
    const bookAuthor = window.prompt("Enter book's author: ");
    const bookPages = window.prompt("Enter book's number of pages: ");
    const bookReadState = window.prompt("Have you finished this book?: ");

    const book = new Book(bookTitle,bookAuthor,bookPages,bookReadState)
    myLibrary.push(book);
    return book;
};

function addBookToDiv(book){
    const div = cardsContainerReference.appendChild(document.createElement("div"));
    div.classList.add("book")
    div.textContent = book.displayBookInfo();
    return div;
};

function addReadButton(div,book){
    const readButton = div.appendChild(document.createElement("button"));
    readButton.classList.add("read-button");
    readButton.textContent = book.readState;
    readButton.addEventListener("click", () => {
    if(readButton.textContent === "unread"){
        readButton.textContent = "read";
        readButton.style.color = "green"
    }else{
        readButton.textContent = "unread"
        readButton.style.color = "red"
    } 
    })
};

function addRemoveButton(div){
    const removeButton = div.appendChild(document.createElement("button"));
    removeButton.classList.add("remove-button");
    removeButton.textContent = "Remove book"
    removeButton.addEventListener("click", () => {
        removeButton.parentElement.remove();
    })  
};