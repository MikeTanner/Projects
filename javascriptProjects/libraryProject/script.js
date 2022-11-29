const container = document.querySelector(".container")
const displayContainer = document.querySelector(".displayContainer")
const showBtn = document.querySelector(".showButton")
const formsetContainer = document.querySelector("#userInput")
const inputBtn = document.querySelector("#inputBtn")

inputBtn.addEventListener("click",(event)=> {
    event.preventDefault(); //stops form submitting
    const addBook = new Book(document.getElementById("inputTitle").value, document.getElementById("inputAuthor").value, document.getElementById("inputDate").value, document.getElementById("inputRead").value);
    console.log(addBook);
    addBookToLibrary(addBook);

    
})

showBtn.addEventListener("click", () => {
    console.log(this);
    if (showBtn.textContent =="Show Form") {
        formsetContainer.classList.add("testShow");
        showBtn.textContent = "Hide Form";
    }
    else {
        formsetContainer.classList.remove("testShow");
        showBtn.textContent = "Show Form";
        
    }

})

function Book(title, author, date, readStatus) {
    //constructor

    this.title = title;
    this.author = author;
    this.date = date;
    this.readStatus = readStatus;
}
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    displayContainer.innerHTML = "";
    myLibrary.forEach(element => {
        createCard(element)
    });
        
}
function readBtnEvent(event) {
/*     console.log("break");
    console.log(event);
    console.log(event.target.id); */
    
    myLibrary.forEach(book => {
        console.log(book.title);
        if (event.target.id == book.title) {
            if (book.readStatus == "Unread") {
                book.readStatus = "Read"
            }
            else {
                book.readStatus = "Unread"
            }
        }
    
    });
    displayBooks();
    event.stopPropagation();
}
function createCard(book) {
    const newCard = document.createElement("div");
    const titleContainer = document.createElement("h2");
    const authorContainer = document.createElement("p");
    const dateContainer = document.createElement("p");
    const readStatus = document.createElement("p");
    const readBtn = document.createElement("button");
    const removeBtn = document.createElement("button");

    document.forms[0].reset();
    newCard.classList.add("card");
    titleContainer.textContent = book.title;
    authorContainer.textContent = book.author;
    dateContainer.textContent = book.date;
    readStatus.textContent = book.readStatus;
    readBtn.textContent = "Change Status";
    readBtn.id = book.title;
    removeBtn.textContent = "Remove Book";
    readBtn.addEventListener("click", readBtnEvent);
/*     removeBtn.addEventListener("click", removeBtnEvent());
 */    newCard.append(titleContainer, authorContainer, dateContainer, readStatus, readBtn, removeBtn);
    displayContainer.appendChild(newCard);

/*     addRemoveButtonListener(removeBtn);
 */}

const bookOne = new Book("Gregology", "Greg Stevens","1945", "Unread");
const bookTwo = new Book("Stevenology", "Steven Gregg", "1944", "Unread");
const bookThree = new Book("Runebook", "Runescape", "1990", "Unread");
let myLibrary = [bookOne, bookTwo, bookThree];
displayBooks();