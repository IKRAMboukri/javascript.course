let vDate=new Date().getDay();
let jour;
switch(vDate){
    case 0:
        jour="dimanche"; 
        break;
    case 1:
        jour="lundi"; 
        break;
    case 2:
        jour="Mardi"; 
         break;
    case 3:
        jour="Mercredi"; 
        break;
    case 4:
        jour="Jeudi"; 
        break;
    case 5:
        jour="Vendredi"; 
        break;
    case 6:
        jour="Samedi"; 
        break;
    default:
        jour="null"
}
console.log(jour)
//ex2
let abreviation;
let branche;
abreviation="ID"

switch(abreviation){
    case "DD":
        branche="developpement Digital";
        break;
    case "ID":
        branche="Infrastructure Digital";
        break;
    case "wD":
        branche="web design";
        break;
    

    
}
console.log("la branche est:",branche)
//LES BOUCLES
