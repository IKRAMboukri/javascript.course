// let age =18;
// let hasLicense = true;

// if(age >= 16){
//     console.log("You are old enough to enter this site ");
//     if(hasLicense){
//         console.log("you have a license");
//     }
//     else if(age < 0){
//         console.log("your age can't be below 0");
//     }
//     else{
//         console.log("you don't have a license");
//     }
   
// }
// else{
//     console.log("You must be +18 to enter this site");

// }




//Another exemple
let isStudent = false;


if(isStudent){
    console.log("you are a student");
   
}
else{
    console.log("you are  not a student");
}


//formulaire
let age ;
const mySubmit = document.getElementById("mySubmit");
const myText = document.getElementById("myText");
const resultElement = document.getElementById("resultElement");

mySubmit.onclick = function(){
  age = myText.value;
  age = Number(age);

if(age >= 100){
    resultElement.textContent = " you are to old " 

}
else if(age == 0){
    resultElement.textContent = "you can't enter. you were just born."
}
else if(age >= 18){
    resultElement.textContent = "you are old enough to enter this site."
}
else if(age < 0){
    resultElement.textContent = "you age can't to below 0"
}
else {
    resultElement.textContent = "You must be +18 to enter this site"
}
}