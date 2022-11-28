const container = document.querySelector(".container")
const displayContainer = document.querySelector(".displayContainer")
const showBtn = document.querySelector(".showButton")
const formsetContainer = document.querySelector("#userInput")

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
function Book(title, author, date) {
    //constructor
    this.title = title;
    this.author = author;
    this.date = date;
}
function addBookToLibrary() {
    //user input
}

function displayBooks() {
    displayContainer.innerHTML = "";
    myLibrary.forEach(element => {
        createCard(element)
    });
        
}
function createCard(book) {
    const newCard = document.createElement("div");
    const titleContainer = document.createElement("h2");
    const authorContainer = document.createElement("p");
    const dateContainer = document.createElement("p");
    newCard.classList.add("card");
    titleContainer.textContent = book.title;
    authorContainer.textContent = book.author;
    dateContainer.textContent = book.date;
    newCard.append(titleContainer, authorContainer, dateContainer);
    displayContainer.appendChild(newCard);
}

const bookOne = new Book("Gregology", "Greg Stevens","1945");
const bookTwo = new Book("Stevenology", "Steven Gregg", "1944");
const bookThree = new Book("Runebook", "Runescape", "1990");
let myLibrary = [bookOne, bookTwo, bookThree];
displayBooks();