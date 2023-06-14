
const headerButton = document.querySelector('.header-button');
const overlay = document.querySelector('.overlay');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');
const toggleInput = document.querySelector('.toggle-input');
const gridItem = document.querySelector('.grid-item');

// UI 

function openPopup() {
  overlay.style.display = 'block';
  popupContainer.style.display = 'block';
}

function closePopup() {
  overlay.style.display = 'none';
  popupContainer.style.display = 'none';
}

function toggleGridItemBorderColor() {
  const toggleInput = document.querySelector('.toggle-input');
  const gridItem = document.querySelector('.grid-item');
  const gridItemRead = document.querySelector('.read');

  toggleInput.addEventListener('change', function() {
    if (this.checked) {
      gridItem.classList.add('green-border');
      gridItemRead.textContent = 'READ'; 
      gridItemRead.classList.add('green-text');
    } else {
      gridItem.classList.remove('green-border');
      gridItemRead.textContent = 'UNREAD'; 
      gridItemRead.classList.remove('green-text');
    }
  });
}

function setupEventListeners() {
  const headerButton = document.querySelector('.header-button');
  const closeButton = document.querySelector('.close-button');

  headerButton.addEventListener('click', openPopup);
  closeButton.addEventListener('click', closePopup);
  toggleGridItemBorderColor();
}

setupEventListeners();

// Object Library

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

