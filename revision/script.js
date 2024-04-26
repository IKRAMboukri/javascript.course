class Personne{
  constructor(id,nom,prenom){
    this.id = id;
    this.nom =nom;
    this.prenom = prenom;

  }
  presentez_vous(){
    console.log('i am'+this.nom)


  }
}

let personne1 = new Personne(1,'boukri','ikram');
let personne2 = new Personne(1,'boukri','ikram');

//HERITAGE 
class Etudiant extends Personne{
  constructor(id,nom,prenom,groupe,note){
    super(id,nom,prenom)
    
    this.groupe = groupe;

    this.note = note;

  }
  presentez_vous(){
    return super.presentez_vous() + 'a trainee computer developer'


  }

  moyenne(){
    return 15
  }

}
let Etudiant1 = new Etudiant(1,'boukri','ikram','DD105',16)
console.log(Etudiant1.presentez_vous())

///Event Keyboard
//quand je click sur entrer
document.addEventListener("keyup",function(){
  if(e.key == Enter){
    console.log('test');

  }
})

//tabulation
document.addEventListener("keyup",function(){
  if(e.key == Tab){
    console.log('test');

  }
})

//Arrowleft
document.addEventListener("keyup",function(){
  if(e.key == Arrowleft){
    document.body.style.backgroundColor = 'red';

  }
  if(e.key == ArrowRight){
    document.body.style.backgroundColor = 'green';
  }
})


let TestsetTimeout = setTimeout(function(){
  console.log('ikram')
},1000)

let i =1;
setInterval(function(){
  i = i+ 1;
  console.log('test')


},1000)
//pour annuler le retard
TestsetTimeout.clearTimeout();

//Ipour ouvrir fenetre
document.getElementById('bbn-ouvrir').addEventListener("click",function() {
  window.open(url)

})

//pour fermer fenetre
window.close(url)




