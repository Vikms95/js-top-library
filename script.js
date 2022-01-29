class Book{   
    constructor(title, author, pages, readState){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readState = readState;
        this.displayBookInfo = () => {
            return this.title 
                    + " by " + this.author 
                    + ", has " + this.pages + " pages, " 
                    + " and right now it's state is: "

        };
    }; 

    get getReadState(){
        return this.readState;
    }

    set setReadState(state){
        this.readState = state;
    }

    updateExistingLibrary(myLibrary){
        let div;

        if(Array.isArray(myLibrary)){
            myLibrary.forEach(book => {
                div = book.addBookToDiv();
                book.addReadButton(div);
                book.addRemoveButton(div);
            })
        }
        else
        {
            div = myLibrary.addBookToDiv();
            myLibrary.addReadButton(div);
            myLibrary.addRemoveButton(div);
        }
    };

    addEventListenerNewButton(){
        newBookButtonReference.addEventListener("click", () => {
            const bookToAdd = this.addBookToLibraryList();
            if(bookToAdd === null) return;
            this.updateExistingLibrary(bookToAdd);
        });
    };

    isInputValid (bookPages,bookReadState){
        if (isNaN(parseInt(bookPages))){
            alert("Number of pages should be a number!");
            return false;
        }
        else if(bookReadState.toLowerCase() !== "unread" && bookReadState.toLowerCase() !== "read"){
            alert("Valid values are 'read' or 'unread'.");
            return false;
        }
        else{
            return true;
        }
    };

    addBookToLibraryList(){
        const bookTitle = window.prompt("Enter the book's name: ");
        if(bookTitle === null) return null;
        const bookAuthor = window.prompt("Enter the book's author: ");
        if(bookAuthor === null) return null;
        const bookPages = window.prompt("Enter the book's number of pages: ");
        if(bookPages === null) return null;
        const bookReadState = window.prompt("Have you finished this book? (Valid values => read/unread) ");
        if(bookReadState === null) return null;

        if(this.isInputValid(bookPages,bookReadState)){
            const book = new Book(bookTitle,bookAuthor,bookPages,bookReadState);
            myLibrary.push(book);
            return book;
        }
        else{
            addBookToLibraryList();
        }
    };

    addBookToDiv(){
        const div = cardsContainerReference.appendChild(document.createElement("div"));
        div.classList.add("book");
        div.textContent = this.displayBookInfo();
        return div;
    };

    addReadButton(div){
        const readButton = div.appendChild(document.createElement("button"));
        readButton.classList.add("read-button");
        readButton.textContent = this.getReadState;
        if(this.getReadState == "unread"){
            readButton.textContent = "Unread";
            readButton.style.color = "red";
        }else{
            readButton.textContent = "Read";
            readButton.style.color = "green";
        }
        readButton.addEventListener("click", () => {
        if(this.getReadState === "unread"){
            this.setReadState = 'read';
            readButton.textContent = "Read"
            readButton.style.color = "green";
            return;
        }else if(this.getReadState === "read"){
            this.setReadState = 'unread';
            readButton.textContent = "Unread"
            readButton.style.color = "red";
            return;
        }else{
            return;
        }
        })
    };

    addRemoveButton(div){
        const removeButton = div.appendChild(document.createElement("button"));
        removeButton.classList.add("remove-button");
        removeButton.textContent = "Remove book";
        removeButton.addEventListener("click", () => {
            removeButton.parentElement.remove();
        })  
    };
};
const cardsContainerReference = document.querySelector(".cards-container");
const newBookButtonReference = document.querySelector(".new-book");

//List of pre-included books to show the UI
const theHobbit = new Book("Hobbit","Tolkien","310","unread");
const harryPotter = new Book("Harry Potter","Rowling","223","read");
const donQuijote = new Book("Don Quijote","Cervantes","594","read");
const annaKarenina = new Book("Anna Karenina","Tolstoi","656","unread");
const toKillAMockingbirg = new Book("To Kill a Mockingbirg","Lee","281","unread");
const theGreatGatsby = new Book ("The Great Gatsby","Fitzgerald","218","unread");
const oneHundredYears = new Book ("One Hundred Years of Solitude","Garcia Marquez","471","read");
const tirantLoBlanc = new Book("Tirant Lo Blanc","Martorell","249","read");
const murderInTheOrientExpress = new Book("Murder in The Orient Express","Christie","252","read");
const romeoAndJuliet = new Book("Romeo and Juliet","Shakespeare","153","read");
const laVidaEsSueno = new Book("La Vida es Sueño","Calderón de la Barca","163","read");
const aroundTheWorldIn80Days = new Book("Around the World in 80 Days","Verne","342","read");
const aConfederacyOfDunces = new Book("A Confederacy of Dunces","Kennedy Toole","362","unread")
const hamlet = new Book("Hamlet","Shakespeare","104","read");
const priceAndPrejudice = new Book("Pride and Prejudice","Austen","432","unread");

let myLibrary = [
	theHobbit,
	harryPotter,
	aroundTheWorldIn80Days,
	tirantLoBlanc,
	donQuijote,
	annaKarenina,
	romeoAndJuliet,
	hamlet,
	priceAndPrejudice,
	murderInTheOrientExpress,
	toKillAMockingbirg,
	laVidaEsSueno,
	theGreatGatsby,
	aConfederacyOfDunces,
	oneHundredYears,
	hamlet
];

Book.prototype.updateExistingLibrary(myLibrary);
Book.prototype.addEventListenerNewButton();
