
const headerButton = document.querySelector('.header-button');
const overlay = document.querySelector('.overlay');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');
const addButton = document.querySelector('.submit-button')
const toggleInput = document.querySelector('.toggle-input');
const gridItem = document.querySelector('.grid-item');

let myLibrary = [];

function setupEventListeners() {
  const headerButton = document.querySelector('.header-button');
  const closeButton = document.querySelector('.close-button');

  headerButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
};

function openPopup() {
  overlay.style.display = 'block';
  popupContainer.style.display = 'block';
};

function closePopup() {
  overlay.style.display = 'none';
  popupContainer.style.display = 'none';
};

function addBookToLibrary() {
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
let formData = new FormData(event.target);
let title = formData.get('book-title');
let author = formData.get('author');
let pages = formData.get('pages');
let read = formData.get('read');
let book = new Book(title, author, pages, read);
createBook(book);
myLibrary.push(book);
closePopup();
document.getElementById("myForm").reset();
});}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function createBook(book){

  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const index = document.createElement("div");
  index.classList.add("index");

  const titleDom = document.createElement("p");
  titleDom.classList.add("book-title");
  titleDom.textContent = "Book Title:" + " " + book.title;

  const authorDom = document.createElement("p");
  authorDom.classList.add("author");
  authorDom.textContent = "Author:" + " " + book.author;

  const pagesDom = document.createElement("p");
  pagesDom.classList.add("pages");
  pagesDom.textContent = "Pages:" + " " + book.pages;

  const unreadDom = document.createElement("p");
  unreadDom.classList.add("read");
  unreadDom.textContent = book.read;

  index.appendChild(titleDom);
  index.appendChild(authorDom);
  index.appendChild(pagesDom);
  index.appendChild(unreadDom);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener('click', function() {
    deleteGridItem(gridItem);
  });

  const toggleLabel = document.createElement("label");
  toggleLabel.classList.add("toggle-label");

  const toggleInput = document.createElement("input");
  toggleInput.setAttribute("type", "checkbox");
  toggleInput.classList.add("toggle-input");

  const toggleSlider = document.createElement("span");
  toggleSlider.classList.add("toggle-slider");

  if (book.read == "Read") {
    gridItem.classList.add('green-border');
    toggleInput.checked = true;
    unreadDom.classList.add("green-text");
  } else {
    gridItem.classList.remove('green-border');
    toggleInput.checked = false;
  }

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(toggleSlider);

  gridItem.appendChild(index);
  gridItem.appendChild(deleteButton);
  gridItem.appendChild(toggleLabel);

  const gridContainer = document.getElementById("grid-container");
  gridContainer.appendChild(gridItem);
};

function toggleGridItemBorderColor() {
  const gridContainer = document.getElementById("grid-container");

  gridContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('toggle-input')) {
      const slider = event.target;
      const book = slider.closest('.grid-item');
      const read = book.querySelector('.read')

      if (slider.checked) {
        book.classList.add('green-border');
        read.textContent = 'Read';
        read.classList.add('green-text');
      } else {
        book.classList.remove('green-border');
        read.textContent = 'Unread';
        read.classList.remove('green-text');
      }
    }
  });
};

function deleteGridItem(gridItem){
  const gridContainer = document.getElementById("grid-container");
  gridContainer.removeChild(gridItem);
};


addBookToLibrary();
setupEventListeners();
toggleGridItemBorderColor();
console.log(myLibrary);