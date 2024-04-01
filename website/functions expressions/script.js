//function expressions = a way to define functions as values or variables
// (parametre) => some code

const numbers = [1, 2, 3, 4, 5, 6];
const square = numbers.map(function(element){
    return Math.pow(element, 2);
})
console.log(square)

const maximum = numbers.reduce(function(x,element){
    return Math.max(x,element);
})
console.log(maximum)


const names = ["ikram", "malak", "iness", "hanane"];
const longWords = names.filter(function(element){
    return element.length > 5;
})
console.log(longWords)

