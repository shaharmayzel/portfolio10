var table = [{ counter: 0, price: 50, check: 0 }, { counter: 0, price: 90 }, { counter: 0, price: 90 }]

function plus(numOfShoe) {
    var elProductNum = document.querySelector(`.num${numOfShoe}`);
    table[numOfShoe - 1].counter += 1;
    elProductNum.innerText = table[numOfShoe - 1].counter;

    var elProductPrice = document.querySelector(`.price${numOfShoe}`);
    table[numOfShoe - 1].check += table[numOfShoe - 1].price;
    elProductPrice.innerText = '$' + table[numOfShoe - 1].check;

    popup();



}

function minus(numOfShoe) {
    var elProductNum = document.querySelector(`.num${numOfShoe}`);
    if (table[numOfShoe - 1].counter > 0) {
        table[numOfShoe - 1].counter -= 1;
        elProductNum.innerText = table[numOfShoe - 1].counter;

        var elProductPrice = document.querySelector(`.price${numOfShoe}`);
        table[numOfShoe - 1].check -= table[numOfShoe - 1].price;
        elProductPrice.innerText = '$' + table[numOfShoe - 1].check;
    }
}

function popup() {
    var elPopup = document.querySelector('.popup')
    elPopup.innerText = 'You have an item in your basket' 
    elPopup.style.display = 'block';
}