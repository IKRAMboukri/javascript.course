class Stagiaire{
  constructor(id,nom,note,filiere,gestion){
      this.id = id;
      this.nom = nom;
      this.note = note;
      this.filiere = filiere;
      this.gestion = gestion;
  }
}



//declaration
let stagiaires =[];
const stagiaire1 = new Stagiaire(1,"Boukri",16,"TDM","supprimer")
let nom = document.getElementById("nom");
let id1 = document.getElementById("id1");
let note = document.getElementById("note");





//event
document.getElementById("ajouter").addEventListener("click",(e)=>{
  e.preventDefault();
  ajouterNote();
});





//FUNCTION

function valide(id1,nom,note){
    nom = document.getElementById("nom").value;
    id1 = document.getElementById("id1").value;
    note = document.getElementById("note").value;

    
  if(!id1 || !nom || !note){
    return false;
  }else{
    return true;
  }
}

function ajouterNote(){
    let content;

    
    for(i = 0; i<stagiaires[i];i++){
      content+= `<tr>
      <td>${stagiaires[i].id}</td>
      <td>${stagiaires[i].nom}</td>
      <td>${stagiaires[i].note}</td>
      <td>${stagiaires[i].filiere}</td>
      <td>
          <input type="button" value="Supprimer" id="supprimer" />
      </td>


     </tr>`

document.getElementById("tdata").innerHTML = content;
    }
    
       

}

