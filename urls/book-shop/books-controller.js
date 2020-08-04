

function init() {
    renderBooks();
}

function onSort(sortBy) {
  sortBooks(sortBy);
  renderBooks();
}

function renderBooks() {
    var books = getBooks();
    var strHTML = ``;
    books.forEach(function (book) {
        strHTML += `<tr>`
        strHTML += `<td>id:"${book.id}"</td>`
        strHTML += `<td>"${book.tytle}"</td>`
        strHTML += `<td>${book.price}</td>`
        strHTML += `<td><button class="read" onclick="onReadBook('${book.id}')">read</button></td>`
        strHTML += `<td><button class="update" onclick="onUpdateBook('${book.id}')">update</button></td>`
        strHTML += `<td><button class="delete" onclick="onRemoveBook('${book.id}')">delete</button></td>`
        strHTML += `<td>
                        <select class="book-rate" onchange="onRateBook('${book.id}', this)">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>
                    </td>`
        strHTML += `</tr>`
    })
    var elTable = document.querySelector('.table-data')
    elTable.innerHTML = strHTML;
}


function onEncreaseRate(id) {
    encreaseRate(id);
    onReadBook(id)
    renderBooks();
}

function onDecreaseRate(id) {
    decreaseRate(id);
    onReadBook(id)
    renderBooks();
}

function onRateBook(id, rating) {
    rateBook(id, rating);
    renderBooks();
}

function getBooks() {
    return booksToDisplay();
}

function onRemoveBook(id) {
    removeBook(id);
    renderBooks();
}

function onUpdateBook(bookId) {
    var newPrice = prompt('Please state a new price');
    updateBook(bookId, newPrice);
    renderBooks();
}



function onReadBook(id) {
    var book = getBookById(id);
    var stars = ''
    if(book.rating === 0) {
        stars = 0;
    }
    else{
    for (var i=0; i<book.rating; i++) {
        stars += '⭐'
    } }
    console.log(stars);
    var strHTML = ``;
    strHTML += `<h2>${book.tytle}</h4>`
    strHTML += `<h3>price:${book.price}</h4>`
    strHTML += `<img class="book-pic" src="${book.picture}" height="100px" width="100px">`
    strHTML += `<button onclick="onCloseModal()">x</button`
    strHTML += `<span class="modal-rating">
                                           <button onclick="onEncreaseRate('${book.id}')">+</button>
                                               <span>rating:<span class="curr-book-rating">${stars}</span></span>
                                           <button onclick="onDecreaseRate('${book.id}')">-</button>
                </span>`
    console.log(book.picture)


    var elModal = document.querySelector('.modal')
    elModal.style.display = 'flex'
    elModal.innerHTML = strHTML;
}

function onCloseModal() {
    var strHTML = ``;
    var elModal = document.querySelector('.modal')
    elModal.style.display = 'none'
    elModal.innerHTML = strHTML;

}


function onAddBook() {
    var tytle = prompt('Please state a book tytle')
    var price = prompt('Please state a price')
    addBook(tytle, price);
    renderBooks();
}