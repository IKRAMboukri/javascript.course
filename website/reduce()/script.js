const prices =  [5, 30, 10, 24,];
const somme = prices.reduce(sum);
console.log(`$${somme.toFixed(2)}`);


function sum(accumulator,element){
    return accumulator + element;
}


//EXP
const grades = [75, 50, 92, 24, 12,100];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);
console.log(maximum);
console.log(minimum);

function getMax(accumulator,element){
    return Math.max(accumulator,element);
}

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}