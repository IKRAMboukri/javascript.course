class Achat{
  constructor(console,quantite){
    this.console = console;
    this.quantite = quantite;
  }
}





//declarations 
const quantite = document.getElementById("quantite");
const console = document.getElementById("console");

const achat1 = new Achat("llllll",4)
let achats =  []

//events
document.addEventListener("DOMContentLoaded",chargement);
document.getElementById("addToCart").addEventListener("click",(e) => {
  e.preventDefault();
  ajouter();
})
//functions
function validation(){
  if((quantite.value>0)&&(quantite.value<20)&&(console.value!="selectionner un console")){
    return true
  }else{
    return false
  }
}


function chargement(){
  let consoles;
  let xhr = new XMLHttpRequest();
  
  xhr.open("GET","sample.json",true);
  xhr.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200){
      let responseData = JSON.parse(this.responseText);
      consoles = responseData.consoles;
      let consolesOpts;
      for(let i = 0; i < consoles.length; i++){
        consolesOpts += `<option>${consoles[i].ref}</option>`;
      }
      document.getElementById("console").innerHTML = consolesOpts;
    }
  }
  xhr.send()
}

function ajouter(){
  let content;
  let achat_table = document.getElementById("panier")
  for(i = 0; i < achats.length;i++){
      content +=`<tr>
                   <td>${achats[i].console}</td>
                   <td>${achats[i].quantite}</td>
                </tr>`
  }
  document.getElementById("tbody").innerHTML = content;
  
}