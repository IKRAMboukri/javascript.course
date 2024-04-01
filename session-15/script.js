//  function Stagiaire(nom,prenom,age,branche){
//      this.nom = nom;
//      this.prenom=prenom;
//      this.age=age;
//      this.branche=branche;
//      this.presenterVous= function(){
//         // console.log("I am "+this.nom+this.prenom)
//         console.log(`Iam ${this.nom} ${this.prenom}`)
//     }
//  }
//  const stagiaire2 = new Stagiaire("HARROUD","MOHAMMED",20,"INFRA")
//  console.log (stagiaire2.presenterVous())

// stagiaire={
//     nom:"BOUKRI",
//     prenom:" IKRAM",
//     age:19,
//     branche:"dev",

//     this.presenterVous: function(){
//         console.log("I am "+this.nom+this.prenom)
//     }
// }
// console.log(stagiaire.nom)
// console.log(stagiaire.branche)
// console.log(stagiaire.presenterVous())


// function Achat(id,article,prix,qte){
//     this.id = id;
//     this.article = article;
//     this.prix = prix;
//     this.qte = qte;
//     this.calculer=function(){
//         let total=qte*prix
//         return total+prix*20
//     }
// }
// const Achat1 = new Achat("5","boucles","220","7")
// console.log(" la TVA est " + Achat1.calculer())






// 
class Achat{
    constructor(id,article,prix,quantite){
        this.id = id;
        this.article = article;
        this.prix = prix;
        this.quantite= quantite;
        
    }
    calculerTVA(){
        const TVA = 0.2;
        let total = this.prix *this.quantite;
        let totalTTC =total + (total*TVA);
        return totalTTC;
    }
}
const achat1 = new Achat(1,"Keybord",300,5)
const achat2 = new Achat(2,"screen",1000,2)
console.log(achat1.article)
console.log(achat1.calculerTVA())



let branche = "DD105";
let nom= "boukri";
let prenom= "IKRAM";
let phrase = "this-is-a-char-method";


console.log(branche.length);
console.log(branche.charAt(3));

console.log(branche.substring(2,6));
console.log(nom.toUpperCase());
console.log(prenom.toLowerCase());
console.log(prenom.endsWith("M"));

console.log(Array.from(prenom));
console.log(phrase.split("-"))



let vDate= new Date();
console.log (vDate.getFullYear());
console.log (vDate.getMonth());
console.log (vDate.getDate());
console.log (vDate.getDay());
console.log (vDate.getHours());
console.log (vDate.getMinutes());

let vdateY = new Date("2023-10-29");
console.log(vdateY);
vdateY.se
