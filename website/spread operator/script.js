let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum)


//another
let username = "ikram";
let letters = [...username].join("-");
console.log(letters)

//another
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots","celery","potatoes"];

let foods = [...fruits,...vegetables, "eggs", "milk"];
console.log(foods)
