let userName = "Ikrama";

console.log(userName.charAt(0));
console.log(userName.indexOf("m"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(4));

let result = userName.startsWith(" ");
console.log(result)

let res = userName.endsWith(" ");
console.log(res)

let resl = userName.includes(" ");
console.log(resl)

//exp 
let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-","");
phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber)

//  phoneNumber = phoneNumber.padStart(15,"0");
//  console.log(phoneNumber)

phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber)