
class Achat{
    constructor(code, titre, description, prix, categorie){
        this.code = code;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.categorie = categorie;
    }
}


//declaration

let achats = [];
let currentAchat;
const achat1 = new Achat(1,"Mouse","giming mouse", 500, "informatique");
const achat2 = new Achat(2,"keyboard","giming keyboard", 1000, "informatique");
achats.push(achat1);
achats.push(achat2);
console.log(achats);



//event
document.addEventListener("DOMContentLoaded" , chargement)
document.getElementById("sauvegarder").addEventListener("click",sauvegarder);
document.getElementById("vider").addEventListener("click",(e) =>{
    e.preventDefault();
    vider();
});

document.getElementById("afficher").addEventListener("click",(e) =>{
    e.preventDefault();
    afficher();
})
document.getElementById("supprimer").addEventListener("click",supprimer);



//function

function chargement(){
    let categories;
    const xhr = new XMLHttpRequest();
    xhr.open("GET","sample.json" ,true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           let responseData =  JSON.parse(this.responseText);
           categories = responseData.categories;
           
           let categoriesOpt;
           for(i = 0; i < categories.length; i++){
               categoriesOpt += `<option value= "${categories[i].libelle}">${categories[i].libelle}</option>`
           }
           document.getElementById("categorie").innerHTML = categoriesOpt;
        }
    }
    xhr.send()
}

function sauvegarder(e){
    e.preventDefault();
    let code = document.getElementById("code").value;
    let titre = document.getElementById("titre").value;
    let description = document.getElementById("description").value;
    let prix = document.getElementById("prix").value;
    let categorie = document.getElementById("categorie").value;

    
    let achat = new Achat(code, titre, description, prix, categorie);
    achats.push(achat)
    console.log(achats)
    afficher();
    vider();
}

function vider(){
    let code = document.getElementById("code").value = "";
    let titre = document.getElementById("titre").value = "";
    let description = document.getElementById("description").value = "";
    let prix = document.getElementById("prix").value = "";
    let categorie = document.getElementById("categorie").value = "informatique";
}

 function afficher(e){
     let content;
     let achats_table = document.getElementById("achats_table");
     for(i = 0; i < achats.length; i++){
         content += `<tr>
                     <td>${achats[i].code}</td>
                     <td>${achats[i].titre}</td>
                     <td>${achats[i].description}</td>
                     <td>${achats[i].prix}</td>
                     <td>${achats[i].categorie}</td></tr>`
     }
     document.getElementById("tdata").innerHTML = content;
    
     for(let i =0; i < achats_table.rows.length;i++){
         achats_table.rows[i].addEventListener("click",function(e){
            for(let j = 0; j < achats_table.rows.length; j++){
             achats_table.rows[j].style.backgroundColor = "none";
            }
            achats_table.rows[i].style.backgroundColor = "green";

            currentAchat = e.currentTarget.getElementsByTagName("td")[0].innerHTML;
            console.log(currentAchat)
         })

     }
 
 }
 function supprimer(){
    achats = achats.filter(function(item){
        return item.code != currentAchat;
    })
    afficher();
 }