const jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"]
for (i=0 ;i<=4;i++){
    console.log(jours[i])
}
for (item in jours){
    console.log(jours[item]);
}
for(jr of jours){
    console.log(jr);
}
let txt=" ";
 function myFunction(value,index,array){

   txt += value +" " ;
}
console.log(txt)
//WHILE
let n=10;
while( n>=0){
    console.log(n)
    n = n-1

}
do{
    console.log(n)
}
while(n >= 0)
//La déclaration Break
//let text=" "
/*for (let i = 0; i < 10;i++)
{
    if (i === 3){ break;}
    text += "the number is" + i + "<br>";
}
console.log(text)
//La déclaration continue*/
let text=" "
for (let i = 0; i < 10;i++)
{
    if (i === 3){ continue;}
    text += "the number is" + i + "<br>";
}
console.log(text)
