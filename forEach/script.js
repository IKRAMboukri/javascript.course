// numbers = [1, 2, 3, 4];
// numbers.forEach(square);
// // numbers.forEach(double);
// numbers.forEach(display);




// function double(element, index, array){
//     array[index] = element * 2;
    
// }

// function display(element){
//     console.log(element);
// }


// function square(element, index, array){
//     array[index] = Math.pow(element, 2);
// }
// numbers.forEach(square);

//exp
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
