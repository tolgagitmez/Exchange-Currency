// class Currency {
//     constructor(firstCurrency,secondCurrency){
//         this.firstCurrency = firstCurrency;
//         this.secondCurrency = secondCurrency;
//         this.url = "https://api.exchangerate.host/latest?base=";
//         this.amount = null;
//     }
//     exchange(){
//         fetch(this.url + this.firstCurrency)
//         .then(response => response.json())
//         .then(data => {
//             const parity = data.rates[this.secondCurrency];
//             const amount2 = Number(this.amount);
//             let total = parity * amount2;
//             console.log(total);
//         })
//         .catch(err => console.log(err))
//     }
//     changeAmount(amount){
//         this.amount = amount;
//     }
//     changeFirstCurrency(newFirstCurrency){
//         this.firstCurrency = newFirstCurrency;
//     }
//     changeSecondCurrency(newSecondCurrency){
//         this.secondCurrency = newSecondCurrency;
//     }
// }





class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amountElement = null;
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency)
        .then(response => response.json())
        .then(data => {
            const parity = data.rates[this.secondCurrency];
            const amount = Number(this.amountElement);
            let total = parity * amount;
            
            resolve(total);
        })
        .catch(err => reject(err));
         })
        
    }
    
    changeAmountElement(amount){
        this.amountElement = amount;
    }

    changeFirstSelect(newFirstSelect){
        this.firstCurrency = newFirstSelect;
    }

    changeSecondSelect(newSecondSelect){
        this.secondCurrency = newSecondSelect;
    }

}


































