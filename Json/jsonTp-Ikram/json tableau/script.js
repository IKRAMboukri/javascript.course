






//function
function afficher(){
    var p = [{"personne":{"id":"1","nom":"AbdelKhalek",
              "Enfants":[{"prenom":"ikram","age":"19"},
              {"prenom":"malak","age":"15"},
              {"prenom":"iness","age":"9"}]
            }
            },
            {"personne":{"id":1,"nom":"Ahmed",
              "Enfants":[{"prenom":"karima","age":"19"},
              {"prenom":"salah","age":"15"},
              {"prenom":"amine","age":"9"}]
            }
            },
          ];
          var nom = document.getElementById("p").value;
          var existe =0;
          var rep = "listes des enfants";
             for(let i = 0; i < p.length ;i++){
   
                if(p[i].personne.nom == nom){
     
                     for(let j = 0; j < 3;j++){
                     rep += p[i].personne.Enfants[j].nom;
                     alert(res);
                     existe = 1;
                    }if(existe == 1){
                      alert(rep)
                    }else{
                      alert("n'existe pas");
                    }

  
                }else{
                    alert("repete");
            }
  

}      
};

// let nom = document.getElementById("p").value;
// for(let i = 0; i < p.length ;i++){
   
//   if(p.personne.nom == nom){
     
//     for(j = 0; j < 3;j++){
//       rep += p[i].personne.Enfants[j].nom;
//       alert(res);
//     }

  
//   }else{
//     alert("repete");
//   }
  

// }





