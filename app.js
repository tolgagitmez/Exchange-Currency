// const amountElement = document.getElementById("amount");
// const firstSelect = document.getElementById("firstCurrency");
// const secondSelect = document.getElementById("secondCurrency");
// const currency = new Currency("USD","TRY");

// EventListener();

// function EventListener(){
//     amountElement.addEventListener("input",exchangeCurrency);
//     firstSelect.onchange = function(){
//         currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
//     };
//     secondSelect.onchange = function(){
//         currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
//     };
// }

// function exchangeCurrency(){
//     currency.changeAmount(amountElement.value)
//     currency.exchange();
const amountElement = document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");
const currency = new Currency("TRY","USD");
const ui = new UI(firstSelect,secondSelect);

eventListener();

function eventListener(){
    amountElement.addEventListener("input",changeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstSelect(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
    }
    secondSelect.onchange = function(){
        currency.changeSecondSelect(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    }
}

function changeCurrency(){
    currency.changeAmountElement(amountElement.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.log(err));


}
































