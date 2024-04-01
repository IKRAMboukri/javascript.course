const numbers = [1 , 2, 3, 4, 5, 6];
const square = numbers.map((element) => Math.pow(element, 2));
const eventNum = numbers.filter((element) => element % 2 ===0);
const maximum = numbers.reduce((accumulator, element) => Math.max(accumulator , element)); 
console.log(maximum);