//LES APELLES ASYNCHRONES
//2nd method : Promise /async await

//consum promise => object => method (then)
getStagiaires().then(
    stagiaires =>{
        console.log(stagiaires);
     return getModules()
     }
   ).then(
        modules => {
            console.log(modules);
            return getNotes()  
        }
        ).then(
           notes => {
            console.log(notes);
            
        }
        ).catch(function(error){
            console.log(error);
        })
    // reason => console.log(reason)

async function doTheWork(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    console.log(posts)
}


doTheWork();



//Build promise
function getStagiaires(){
    let completed = true;
    return new Promise(function(resolve,reject){
        if(completed){
            setTimeout(function(){
                resolve([{id:1,nom:"Boukri",prenom:"ikram"},
                {id:2,nom:"Messaoudi",prenom:"malika"}]);
             },200)
        }else{
            reject("failled");
        }
        
    
    })
}


function getModules(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve([{nom:"python",hrs:90},{nom:"php", hrs:120}]);
    },200)
    
  })  
}

 function getNotes(){
     return new Promise(function(resolve,reject){
         setTimeout(function(){
             resolve(([{note:19},
                {note:18}]));
         },200)
     })
 }
