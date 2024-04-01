let fruits = ["apple" , "orange" ,"banana","coconut"];

// console.log(fruits[1]);
// fruits[3] = "coconut";
// fruits.push("coconut");
// fruits.pop();  // fruits.shift(); //suppr le dernier  elemt
// fruits.unshift("mango"); //ajouter au debut de la liste
// let numOfFruits = fruits.length;


// console.log(fruits);
// console.log(numOfFruits);

// let index = fruits.indexOf("orange");
// console.log(index);
// for(let i = 1; i < fruits.length; i+=2 ){
//     console.log( fruits[i]);
// }

// for(let i = fruits.length; i >= 0; i-- ){
//     console.log( fruits[i]);
// }



for(let fruit of fruits){
    console.log( fruit);
}

fruits.sort().reverse(); //en ordre alphabetique




