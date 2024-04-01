let day = 1;

switch(day){
    case 1:
        console.log("it is Monday");
        break;
    case 2:
        console.log("it is tuesday");
        break;
    default:
        console.log(`${day} is not a day`)
}

// exP 2

let textScore = 92;
let letterGrade;

switch(true){
    case  textScore >= 90:
        letterGrade = "A";
        break;
    case textScore >= 88:
        letterGrade = "B";
        break;
}
console.log(letterGrade);