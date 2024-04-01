//LES BASES D'AFFICHAGE
// console.log(`hello`);
// window.alert(`This is a alert`);
// window.alert(`Ilike pizza`);
// document.getElementById(`myH1`).textContent=`Hello`;
// document.getElementById(`myP`).textContent=`This is my Paragraphe`;


//LA DECLARATION  let x;
// assignment  x=100;
// let gpa = 2.1;
// let age = 19;
// let price = 10.99;

// console.log(`You are ${age} years old`);
// console.log(`the price is $${price}`);
// console.log(`your gpa is: ${gpa}`);
// console.log(typeof age);
// console.log(typeof price);


// let myFirstName = "ikram";
// let favoriteFood = "chicken";
// console.log(typeof myFirstName);
// console.log(typeof favoriteFood);

// console.log(`my first name is ${myFirstName}`)
// console.log(`my favorite food is ${favoriteFood}`)

// let online = true;
// let forSale = false;



// console.log(typeof online);
// console.log(`ikram is online: ${online}`);
// console.log(`Is this a car for sale: ${forSale}`);

// let fullName = "Ikram";
// let age = 19;
// let student = true;

// document.getElementById("p1").textContent = `your name is ${fullName}`;
// document.getElementById("p2").textContent = `your are ${age} years old`;
// document.getElementById("p3").textContent = student;

// let students = 30;

// students = students + 1;
// students = students - 1;
// students = students*2;
// students = students**2;
// students = students/2;
// students = students % 3;
// students += 6;
// students -= 6;
// students *= 2;
// students /= 6;
// students **= 6;

// students++
// students--


// console.log(students)

/* operator precedence
    1.parenthesis()
    2.exponents
    3.multiplication ,division,modulo
    4.addition,subtraction
*/
// let result = 1+2*3+4**2;
// console.log(result)


// How to accept user input
// 1.EASY WAY =window prompt
// 2.PROFESSIONAL WAY = HTML textbox

// let username;
// username = window.prompt("what's your username?");
// console.log(username);

// let username;
//  sub = document.getElementById("mySubmit")

//  sub.onclick = function(){
//     username = document.getElementById("myText").value;
    // console.log(username);
    // document.getElementById("H1").textContent = `hello ${username}`
// }
// Type conversion = change the datatype of a value to another (string,numbers,boolean)
// let age = window.prompt("how old are you?");
// age = Number(age);
// age+=1;
// console. log(age,typeof age)

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// let x = "0";
// let y = "0";
// let z = "0";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//const = a variable that can't be changed

// const PI = 3.14;
// let reduis;
// let circumference;

// reduis = window.prompt("Enter the reduis of a circle");
// reduis = Number(reduis);
// circumference = 2 * PI * reduis;
// console.log(circumference);

// const PI = 3.14;
// let reduis;
// let circumference;

// document.getElementById("mySubmit2").onclick = function(){
//  reduis = document.getElementById("myText2").value;
//  reduis = Number(reduis);
//  circumference = 2 * PI * reduis;
//  document.getElementById("myH3").textContent = circumference +"cm";
//  console.log(circumference + "cm");

// }

//Math = build-in objject that provides a collection of properties and methods
/* let x = 10;
 let y = 2;
 let z;
 
 z = Math.round(x);     //affichage 3
 z = Math.floor(x);     //affichage 3
 z = Math.ceil(x);      //affichage 4
 z = Math.trunc(x);     //affichage 3
 z = Math.pow(x,y);     //pissance 
 z = Math.sqrt(x);        //la racine carree
 z = Math.log(x);
 z = Math.sin(x);
 z = Math.cos(x);
 z = Math.tan(x);
 z = Math.abs(x);       //devient positif
 z = Math.sign(x);    //sign
 z = Math.max(x,y);
 z = Math.min(x,y);
 console.log(z)
*/

//RONDOM NUMBER GENERATOR

let randomNum = Math.floor(Math.random()*6 + 1) ;
console.log(randomNum);
