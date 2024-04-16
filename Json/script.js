// const stagiaire = {
//     id : 1,
//     nom :"BOUKRI",
//     prenom : "IKRAM",
//     age : 19,
// }
// // de objet JS => Json  (stringify)
// let stagiaireJson = JSON.stringify(stagiaire)

// console.log(stagiaire)
// console.log(stagiaireJson )

// //de Json => objet JS  (parse)

//  stagiaireJson = JSON.parse(stagiaireJson);
//  console.log(stagiaireJson)
//  console.log(stagiaireJson.nom) 



    // document.getElementById("btn-load", loadTxt).addEventListener("click",loadTxt);
    // function  loadTxt(e){
        // e.preventDefault();

        // let request = new XMLHttpRequest();

        // request.open("GET", "sample.txt", true);
    //1st method 
        // request.onreadystatechange = function(){
        //     if(this.readyState == 4 && this.status == 200){
        //     document.getElementById("container").innerHTML = this.responseText;
        //    }
        
        // };X
        // request.send()

        
    // }
    // document.getElementById("btn-load-json").addEventListener("click",loadTxt);


document.querySelector("btn").addEventListener("click",loadData)
function loadData(){
let user;
let content

const request = new XMLHttpRequest();
request.open("get","text.json",true);
request.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        data = JSON.parse(this.response)
        user = data.user;
        content="<ul>";
        content+= `<li> user name :${user.nom} </li>`;
        content+=`<li> user age :${user.age}</li>`;
        content="<ul>";
        document.getElementById("container")
    }
}
request.send()
}
