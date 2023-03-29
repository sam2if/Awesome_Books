const list = document.querySelector('.list');
const addnew = document.querySelector('.addnew');
const contact = document.querySelector('.contacts');
const forms = document.querySelector('.forms');
const lll = document.querySelector('.lll');

list.addEventListener('click', () => {
  forms.style.display = 'none';
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
  forms.style.display = 'flex';
  addnew.style.color = 'rgb(82, 82, 234)';
  list.style.color = 'black';
  contact.style.color = 'black';
  lll.textContent = 'Add a new book';
  updateBookList();
})

contact.addEventListener('click', () => {
  store.style.display = 'block';
  lll.textContent = 'Contact information';
  forms.style.display = 'none';
  contact.style.color = 'rgb(82, 82, 234)';
  addnew.style.color = 'black';
  list.style.color = 'black';
  store.innerHTML = 'dcvwgvwejdvwejdvwjevdwefefewfbevfhjwbfjwhbejhwekcwhecwecblwevcvegcvegwvcewcwehcewjcowecw';
  store.style.border = 'none';
})
