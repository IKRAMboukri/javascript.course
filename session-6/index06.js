//function declarations
//function greet(){
   // console.log("hello")
//}
//greet()


//function somme(a,b){
  // return a+ b
//}

//let sm = somme(5,9)
//functions expressions
let somme = function (a,b){
    return a + b
}
let sm = somme (5,9)
console.log(sm)
//les fonctions flechées (arrow function)
let a = function(){
    return console.log("hello")
}

let greet = () => {
    console.log("hello isfo");
}

let nomComplet = (nom,prenom) => {
    let fullname =nom+" "+prenom
    return fullname
}
console.log(nomComplet("boukri","ikram"));
greet();

const variable = () => {
    return  "ma-variable"

}
console.log(variable(2,3));
//les expressions lambdas
//Map(elle retourne un nouveau tableau)

/*let jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
let i = 0;
jours.map(function(item){
    i+=1
    return console.log(item)
})*/
const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

jours.map((item) => {
    if (item === "jeudi"){
        item = item + "* jour férier";
    }
   
    return console.log(item);
});
console.log(jours)

const stagiaires = [
    {nom:"boukri",prenom:"ikram",age:19},//index0
    {nom:"baddioui",prenom:"ilham",age:19},
    {nom:"bakarrouch",prenom:"fatima",age:19},

]
/*stagiaires.map((info) =>{
    fullname = info['nom']+" "+info['prenom'];
    return fullname
})*/
/*nomStagiaires=stagiaires.map((info) =>{
    fullname = info['nom']+" "+info['prenom'];
    return fullname
})
console.log(stagiaires)
console.log(nomStagiaires)*/


//[a,b,c,d]
let nameAge;
nameAge= stagiaires.map((item,index,arrStagiaires)=>{
   //{nom:"boukri",prenom:"ikram",age:19},
    let st;
    st = { ...item,branche : 'DD',id:index+1}
    
    return st ;
});
console.log(nameAge)

let remarqueAge;
remarqueAge = stagiaires.map((item,index,arrStagiaires)=>{
    let st;
    if ((item.age)< 20){
        st={ ...item, branche: "DD", id:index +1,remarque :"age inférieur à 20 ans"}
    }else{
        st={ ...item, branche: "DD", id:index +1,remarque :"age supérieur à 20 ans"}
    }
    return st;
});
console.log(remarqueAge)
