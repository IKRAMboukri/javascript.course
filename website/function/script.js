 function happyBirthday(username,age){
     console.log(`happy birthday dear ${username}`)
     console.log(`you are ${age} years old`)
 }
 happyBirthday("Ikram",19);
 happyBirthday("malak",15)
//EXP
function add(x , y){
    return  x + y;
     
}

console.log(add(5 , 2));

//exp
function isEven(number){
   return number % 2 === 0 ? true :false;
     
}

console.log(isEven(10));

//exp
function isValidEmail(email){
    return email.includes("@") ? true :false;
}      
 console.log(isValidEmail("ikram@123.com"));