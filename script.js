
const headerButton = document.querySelector('.header-button');
const overlay = document.querySelector('.overlay');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');

function openPopup() {
  overlay.style.display = 'block';
  popupContainer.style.display = 'block';
}

function closePopup() {
  overlay.style.display = 'none';
  popupContainer.style.display = 'none';
}

headerButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


let myLibrary = [];

function Book(title, author, pages, read) {
      this.title = title
      this.author = author
      this.pages = pages
      this.read = read
      this.info = function () {
             return(title, author, pages, read)
      }
};



function addBookToLibrary() {
      // do stuff here
}

