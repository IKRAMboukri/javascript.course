const display = document.getElementById("display");


function appendTODisplay(x){
   display.value += x;
}


function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
   
}

function clearDisplay(){
   display.value ="";
}
