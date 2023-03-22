const button = document.querySelector('#button');
const store = document.querySelector('#myList');

let Book = []



function remo(arr, index) {
    arr.splice(index, 1);
}

function show() {
    var book = {
        title: document.getElementById('title').value,
        author: document.getElementById('author').value
    };
    
    Book.push(book);
    const node = document.createElement("li");
    let len = Book.length;
    for (let i = 0; i < len; i++) {
        node.setAttribute('id', `m${i}`);
        node.innerHTML = `${Book[i].title} <br> ${Book[i].author} <br> <button id="remove-${i}">Remove</button><hr><br>`;
        store.appendChild(node);
    }
    const rem = document.document.getElementById(`remove-${i}`);
    for (let j = 0; j < rem.length; j++) {
        rem.addEventListener('click', () => {
            rem[j].parentElement.style.display = "none";
            remo(Book, j);
        })
    }
    title.value = '';
    author.value = '';
    
}


button.addEventListener("click", show);




