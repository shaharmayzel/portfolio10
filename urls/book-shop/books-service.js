const KEY = 'books';
var gIms = ["sherlockho.jpg", "074-Oliver-Twist-Poster.jpg", "harrypotter.jpg", "littleprincess.jpg"]
var gName = ['Sherlock Holmes', 'Oliver Twist', 'Harry Potter', 'Little Princess']
var gPrice = [8.99, 5.89, 4.99, 8.69]
var gBooks = [
    { tytle: 'Sherlock Holmes', price: 8.99, id: makeId(), picture: "sherlockho.jpg", rating: 0 },
    { tytle: 'Oliver Twist', price: 5.89, id: makeId(), picture: "074-Oliver-Twist-Poster.jpg", rating: 0 },
    { tytle: 'Harry Potter', price: 4.99, id: makeId(), picture: "harrypotter.jpg", rating: 0 },
    { tytle: 'Little Princess', price: 8.69, id: makeId(), picture: "littleprincess.jpg", rating: 0 }
]

var gBooks;

var gSortBy = '';




// function booksId() {
//     for (var i = 0; i < gBooks.length; i++) {

//     }

// }


_createBooks();

function _createBooks(){
    // debugger
    // var books =  loadFromStorage(KEY);
    // if(!books || !books.length){
    //     books = [];
    //     var imgs = gImgs
    //     var names = gNames;
    //     var prices = gPrice
    //     for (var i = 0; i < 4; i++) {
    //         var img = imgs[i]
    //         var name = names[i]
    //         var price = prices[i]
    //         books.push(createBook(name,price,img))
    //     }
    // }
    // gBooks = books;
    // _saveBooks();
}



function sortBooks(sortBy) {
    gSortBy = sortBy;

}

function _saveBooks(){
    saveToStorage(KEY, gBooks);
}

function booksToDisplay() {
    var books = gBooks;
    if (gSortBy === 'id') {
        var sortedBooks = books.sort(function (a, b) {
            if (a.id < b.id) { return -1; }
            if (a.id > b.id) { return 1; }
            return 0;
        })

    }
    else if (gSortBy === 'tytle') {
        var sortedBooks = books.sort(function (a, b) {
            if (a.tytle < b.tytle) { return -1; }
            if (a.tytle > b.tytle) { return 1; }
            return 0;
        })

    }
    else if (gSortBy === 'price') {
        var sortedBooks = books.sort(function (a, b) {
            if (a.price < b.price) { return -1; }
            if (a.price > b.price) { return 1; }
            return 0;
        })


    }

    else if (gSortBy === 'rating') {
        var sortedBooks = books.sort(function (a, b) {
            if (a.rating > b.rating) { return -1; }
            if (a.rating < b.rating) { return 1; }
            return 0;
        })
    }
    else {
        return gBooks;
    }
    return sortedBooks;
}







function encreaseRate(id) {
    var elCurrBookRating = document.querySelector('.curr-book-rating');
    var book = getBookById(id);
    if (book.rating < 10) {
        book.rating++;
    }
    _saveBooks();
}

function decreaseRate(id) {
    var elCurrBookRating = document.querySelector('.curr-book-rating');
    var book = getBookById(id);
    if (book.rating > 0) {
        book.rating--;
    }
    _saveBooks();

}


function rateBook(id, rating) {
    var book = getBookById(id);

    book.rating = parseFloat(rating.value);
    _saveBooks();

}

function getBookById(id) {
    var books = gBooks;
    var book = books.find(function (book) {
        return (id === book.id)
    })
    return book;
}


function updateBook(id, price) {
    for (var i = 0; i < gBooks.length; i++) {
        if (gBooks[i].id === id) {
            gBooks[i].price = '$' + price;
        }
    }
    _saveBooks();
}



function removeBook(id) {
    for (var i = 0; i < gBooks.length; i++) {
        if (gBooks[i].id === id) {
            gBooks.splice(i, 1)
        }
    }
    _saveBooks();

}
function createBook(tytle, price, img) {
    var newBook = {
        tytle: tytle,
        price: price,
        id: makeId(),
        picture: img ,
        rating: 0
    }
    return newBook
}


function addBook(tytle, price, img) {
    var books = gBooks;
    var newBook = {
        tytle: tytle,
        price: price,
        id: makeId(),
        picture: "unknown-book-.jpg",
        rating: 0
    }
    books.push(newBook);
    _saveBooks();
}

