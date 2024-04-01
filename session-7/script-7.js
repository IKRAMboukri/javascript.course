console.log(document.querySelector(".nom").value);

document.querySelector(".nom").value = "Ahmed";

console.log(document.querySelector(".age").value);

let a=((document.querySelector(".nombre1").value));
a = Number(a)

let b=(document.querySelector(".nombre2").value);

b = Number(b)

let somme= a+b
document.querySelector(".somme").value = somme;



if (somme>20) {
    document.querySelector(".somme").style.backgroundColor="red";
    
}


var h = document.head;
console.log(h)

var bo = document.body;
console.log(bo);

let calculerF =(e) =>{
    e.preventDefault();
    let n1 = Number(document.querySelector ("number-un").value)
    let n2 = Number(document.querySelector ("number-deux").value)
    document.querySelector(".somme").textContent = n1+n2
}
document.querySelector(".btn-calculer").addEventListener("click",calculerF)                       
                 











