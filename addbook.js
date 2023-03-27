const button = document.querySelector('#button');
const store = document.querySelector('#myList');
var title = document.getElementById('title');
var author = document.getElementById('author');

let Book = [];

// Check if there is saved data in local storage
if (localStorage.getItem('bookList')) {
  Book = JSON.parse(localStorage.getItem('bookList'));
  // Update the book list with the saved data
  updateBookList();
}

function Booklist(title, author, id) {
  this.title = title.value;
  this.author = author.value;
  this.id = Book.length;
}

function remove(b) {
  var filt = Book.filter((a, i) => {
    if (b == a.id) {
      Book.splice(i, 1);
      let rem = document.getElementById(`m${b}`);
      rem.remove();
    }
  });
  // Save the updated book list to local storage
  localStorage.setItem('bookList', JSON.stringify(Book));
}

function show() {
  var id;
  var book = new Booklist(title, author, id);
  Book.push(book);
  const node = document.createElement("li");
  let len = Book.length;
  for (let i = 0; i < len; i++) {
    node.setAttribute('id', `m${i}`);
    node.innerHTML = `${Book[i].title} <br> ${Book[i].author} <br> <button onclick=remove(${Book[i].id})>Remove</button><hr><br>`;
    store.appendChild(node);
  }
  title.value = '';
  author.value = ''; 
  // Save the updated book list to local storage
  localStorage.setItem('bookList', JSON.stringify(Book));
}

button.addEventListener("click", show);

// Add an event listener for the storage event
window.addEventListener('storage', function(event) {
  if (event.key === 'bookList') {
    // Update the book list with the new data
    Book = JSON.parse(event.newValue);
    updateBookList();
  }
});

function updateBookList() {
  // Clear the existing book list
  store.innerHTML = '';
  // Create a new book list from the saved data
  let len = Book.length;
  for (let i = 0; i < len; i++) {
    const node = document.createElement("li");
    node.setAttribute('id', `m${i}`);
    node.innerHTML = `${Book[i].title} <br> ${Book[i].author} <br> <button onclick=remove(${Book[i].id})>Remove</button><hr><br>`;
    store.appendChild(node);
  }
}
