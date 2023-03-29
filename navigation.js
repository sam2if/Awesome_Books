const button = document.querySelector('#button');
const store = document.querySelector('#myList');
var title = document.getElementById('title');
var author = document.getElementById('author');
var date = new Date();
let now = new Date().toLocaleDateString('en-us', {month:"long"});
var current_time = now + " " + date.getDate() + "th" + "  " + date.getFullYear() + "," + " " + date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
document.getElementById("demo").innerHTML = current_time;


let Book = [];

if (localStorage.getItem('bookList')) {
  Book = JSON.parse(localStorage.getItem('bookList'));
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
    node.innerHTML = `<div class="title"><h5>"${Book[i].title}" by ${Book[i].author} </h5></div> <button onclick=remove(${Book[i].id})>Remove</button>`;
    store.appendChild(node);
  }
  title.value = '';
  author.value = ''; 
  localStorage.setItem('bookList', JSON.stringify(Book));
}

button.addEventListener("click", show);
store.c

function updateBookList() {
  store.innerHTML = '';
  let len = Book.length;
  for (let i = 0; i < len; i++) {
    const node = document.createElement("li");
    node.setAttribute('id', `m${i}`);
    node.innerHTML = `<div class="title"><h5>"${Book[i].title}" by ${Book[i].author} </h5></div><button class="remove" onclick=remove(${Book[i].id})>Remove</button>`;
    store.appendChild(node);
  }
}

const cont = document.querySelector('.cont');
const list = document.querySelector('.list');
const addnew = document.querySelector('.addnew');
const contact = document.querySelector('.contacts');
const forms = document.querySelector('.forms');
const lll = document.querySelector('.lll');
cont.style.display = 'none';


list.addEventListener('click', () => {
  forms.style.display = 'none';
  cont.style.display = 'none';
  store.style.display = 'block';
  store.style.border = '2px solid black';
  lll.textContent = ' All awesome books';
  list.style.color = 'rgb(82, 82, 234)';
  contact.style.color = 'black';
  addnew.style.color = 'black';
  updateBookList()
})

addnew.addEventListener('click', () => {
  store.style.display = 'none';
  cont.style.display = 'none';
  forms.style.display = 'flex';
  addnew.style.color = 'rgb(82, 82, 234)';
  list.style.color = 'black';
  contact.style.color = 'black';
  lll.textContent = 'Add a new book';
  updateBookList();
})

contact.addEventListener('click', () => {
  store.style.display = 'none';
  cont.style.display = 'block';
  forms.style.display = 'none';
  contact.style.color = 'rgb(82, 82, 234)';
  addnew.style.color = 'black';
  list.style.color = 'black';
  store.style.border = 'none';
  lll.textContent = '';
})