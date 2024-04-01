const myCheckbox = document.getElementById("myCheckbox");
const visa = document.getElementById("visaBtn");
const masterCard = document.getElementById("masterCardBtn");
const paypal = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");


mySubmit.onclick = function () {
    if(myCheckbox.checked){
        subResult.textContent = `you are subsribed`;
    }
    else{
        subResult.textContent = `you are Not subsribed`;
    }
    if(visa.checked){
        paymentResult.textContent = `you are paying with  visa `
    }
    else if(masterCard.checked){
        paymentResult.textContent = `you are paying with master`;
    }
    else if(paypal.checked){
        paymentResult.textContent = `you are paying with paypal`;
    }
    else{
        paymentResult.textContent = `you must select a payment type`;
    }
   

   
}


//FACILITE CONDITION

//condition? codetrue : codefalse

let age = 21;
let message = age >= 18 ? "you're an adult" : "you're a minor";
console.log(message);

//another exp

let isStudent = false;
let messages = isStudent? "you are a student" : "you are Not a student"
console.log(messages);

//another exp


let purchseAmount = 125;
let discount = purchseAmount >= 100? 10 : 0;
console.log(`your total is $${purchseAmount -  purchseAmount * (discount/100)}`)