//declaration
let stagiairesArray = [];
let activitesArray = [];

//events






//functions
function changement(){
    let request = new XMLHttpRequest(); 
    request.open("GET", "sample.txt", true);
    request.onreadystatechange = function(){
     if(this.readyState == 4 && this.status == 200){
       
       stagiairesArray = this.responseData.stagiaires;
       activitesArray = this.responseData.activites;
        }
    };
    request.send()
}



