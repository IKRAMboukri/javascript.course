function afficherEnfants(){
    let p = {"personne":{"id":1,"nom":"AbdelKhalek",
             "Enfants":[{"prenom":"ikram","age":19},
                        {"prenom":"malak","age":15},
                        {"prenom":"iness","age":9}
            ]
   }};
   let result = "listes des enfants:"
   let nom = document.getElementById("p").value;
   if(p.personne.nom == nom ){
    for(let i = 0;i < 3;i++)
       result+=" "+ p.personne.Enfants[i].prenom +" " + "age: "+p.personne.Enfants[i].age;
       console.log(result);
   }else{
     console.log("n'existe pas");
   }

}

