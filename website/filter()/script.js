const ages = [16, 12, 16, 20, 18, 19, 19];

const adult = ages.filter(isAdult);
console.log(adult);

const modulo = ages.filter(pair);
console.log(modulo);

function isAdult(element){
    return element >= 18;
}


function pair(element){
    return element % 2 === 0 ;
}

//exp
const fruits = ["apple","banana","orange", "kiwi","coconut"];
const shortWords = fruits.filter(getShortWords);
console.log(shortWords);
function getShortWords(element){
    return element.length <= 6;
}