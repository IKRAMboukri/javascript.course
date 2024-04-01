let r1 = document.getElementById("r1");
let r2 = document.getElementById("r2");
let ch1 = document.getElementById("ch1");
let ch2 = document.getElementById("ch2");
let nomSociete = document.getElementById("nomSociete");
let profil = document.getElementById("profil");
let pays = document.getElementById("pays");
let telephone = document.getElementById("telephone");
let tarifs = document.getElementById("tarifs");
let s1= document.getElementById("s1");
let s2= document.getElementById("s2");
let s3= document.getElementById("s3");
let diverreur= document.getElementById("diverreur");



function ajouter(){
    
    let i = s1.selectedIndex;
    let j = s2.selectedIndex;
      s3.options[s3.options.length] = new Option(s1.options[i].text + "-" + s2.options[j].text);
}