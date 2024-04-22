//PARTIE1
//EX1
//functions
/* function moyenne(n1,n2,n3,n4){
   let p = document.getElementById("p");
   let somme = (n1 + n2 + n3 + n4);
   p.innerHTML = `la moyenne de 4 nombres est: ${somme/4}`
}
 moyenne(parseInt(prompt("entrer le nombre 1:")),parseInt(prompt("entrer le nombre 2:")),parseInt(prompt("entrer le nombre 3:")),parseInt(prompt("entrer le nombre 4:")))*/



//EX2
/*function mode(x){
  if(x % 2 === 0 && x % 3 === 0 ){
    console.log(true) 
  }else{
    console.log(false)
  }
}
mode(parseInt(prompt("enter un nombre:")))$*/

//EX3
 /*function sommePositif(a,b){
  let sum = 0
  for(i = Math.min(a,b) ;i <= Math.max(a,b) ; i++){
    if(i>0){
      sum += i
    }
  }
  console.log(sum);
}
sommePositif(-4,5)*/


//EX4
/*function sommePositif(a,b){
  let sum = 0
  for(i = Math.min(a,b) ;i <= Math.max(a,b) ; i++){
    
    sum += Math.abs(i);
    
  }
  console.log(sum);
}
sommePositif(-5,2);*/

//EX5
/*function multiAbsolue(a,b){
  let mult = 1;
  for(i = Math.min(a,b);i <= Math.max(a,b); i++){
    if(i % 2 === 0){
      mult *= Math.abs(i)
    }
    
  }
  console.log(mult)
}
 multiAbsolue(4,2)*/

//PARTIE 2
/*let h2 = document.createElement("h2");
let div = document.createElement("div");
let a = document.createElement("a");

let h2_cont = document.createTextNode("Lien html")
let div_cont = document.createTextNode("les liens html sont defini avec la balise a:")
let a_cont = document.createTextNode("c'est un lien")


h2.appendChild(h2_cont)
div.appendChild(div_cont)
a.appendChild(a_cont)
a.setAttribute("title","ceci est un lien")
a.setAttribute("alt","ceci est un lien")
a.setAttribute("href","https://google.com")
div.appendChild(a)
console.log(h2)
console.log(div)*/
let login = document.getElementById("login")
let pwd = document.getElementById("pwd")

function validation(){
    if(login.value == ""){
      alert("vous n'avez pas entrer votre login")
      login.focus();
      login.style.backgroundColor="red";
      return false;
    }else if(pwd.value == ""){
      alert("enter votre pwd")
      pwd.focus();
      return true
    }else{
      return false;
    }
}