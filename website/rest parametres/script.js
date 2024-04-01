const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods){
     console.log(...foods);
}

openFridge(food1, food2, food3, food4, food5);

function getFood(...foods){
    return foods;
}
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods)

//onother exp
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result
}
const total = sum(1,7,10);
console.log(total)

//another
function combineStrings(...strings){
    return strings.join("-");

}
const fullName = combineStrings("Mr","Spongebob","Squarepants","III")
console.log(fullName)


