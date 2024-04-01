//  console.log(document.body.childNodes);
//  console.log(document.body.childNodes[1]);
// console.log(document.body.querySelector("ul").childNodes[1]);
// console.log(document.querySelector("ul").parentNode);

// console.log(document.querySelector("nav").childNodes[1]);
// //POUR ACCEDER A UN ELAMENT
// console.log(document.querySelector("ul").firstElementChild);
// console.log(document.querySelector("ul").firstChild);
// console.log(document.querySelector("nav").nextElementSibling);
// console.log(document.querySelector("nav").previousElementSibling);
// console.log(document.ELEMENT_NODE)
// console.log(document.ATTRIBUTE_NODE)
// console.log(document.TEXT_NODE)
// console.log(document.nodeName)
//  document.querySelector("div").style.border="solid 3px black";
//  document.querySelector("div").style.width="200px";
//  document.querySelector("div").style.height="150px";
// document.querySelector("div").style.textAlign="center";
let stagiaires=[];





document.querySelector(".afficher").addEventListener("click",function(e){
    e.preventDefault();
    let stagiaire ={
        nom:"",
        prenom:"",
        age:"null",
    }
    let nom = document.getElementById("nom").value;
    let prenom =document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    

    stagiaire.nom=nom;
    stagiaire.prenom=prenom;
    stagiaire.age=age;

    stagiaire.push(stagiaires)
    console.log(stagiaire);
    console.log(stagiaires);
});
let btnAfficher =document.getElementById('afficher');
btn






