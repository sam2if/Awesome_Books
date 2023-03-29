const button = document.querySelector('#button');
const store = document.querySelector('#myList');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

class Booklist {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Booklist.count++;
  }

  remove(b) {
    var filt = Book.filter((a, i) => {
      if (b == a.id) {
        Book.splice(i, 1);
        let rem = document.getElementById(`m${b}`);
        rem.remove();
      }
    });
    localStorage.setItem('bookList', JSON.stringify(Book));
  }

  show() {
    let book = new Booklist(titleInput.value, authorInput.value);
    Book.push(book);
    const node = document.createElement("li");
    node.setAttribute('id', `m${book.id}`);
    node.innerHTML = `${book.title} <br> ${book.author} <br> <button onclick="book.remove(${book.id})">Remove</button><hr><br>`;
    store.appendChild(node);
    titleInput.value = '';
    authorInput.value = '';
    localStorage.setItem('bookList', JSON.stringify(Book));
  }

  static count = 0;

  static updateBookList() {
    store.innerHTML = '';
    let len = Book.length;
    for (let i = 0; i < len; i++) {
      const node = document.createElement("li");
      node.setAttribute('id', `m${Book[i].id}`);
      node.innerHTML = `${Book[i].title} <br> ${Book[i].author} <br> <button onclick="book.remove(${Book[i].id})">Remove</button><hr><br>`;
      store.appendChild(node);
    }
  }
 
}

let Book = [];

if (localStorage.getItem('bookList')) {
  Book = JSON.parse(localStorage.getItem('bookList'));
  Booklist.updateBookList();
}

const book = new Booklist();
button.addEventListener("click", () => book.show());
