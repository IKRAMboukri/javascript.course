//while
// let username = "";
// while(username ==="" || username === null){
//     username = window.prompt("enter your name");
// }
// console.log(`hello ${username}`)


// DO WHILE
// let username;
// do{
//     username = window.prompt("enter your name");
// } while(username ==="" || username === null){
//     console.log(`hello ${username}`)
// }


// EXP
let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("enter your name"); 
    password = window.prompt("enter your password");


    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("you are logged in");
    }
    else{
        console.log("invalid");
    }
}


