// const fullName = "ikram Boukri";

// let firstName = fullName.slice(0,2);
// let lastName = fullName.slice(2,5);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0,fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" "))
// let lastName = fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName);
// console.log(lastName);
// console.log(lastChar);

// const email = "ikram@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1)

// console.log(username);
// console.log(extension)


//Method chaining

let username = window.prompt("enter your name");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);


