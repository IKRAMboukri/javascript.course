// events: keydown,keyup

const box = document.getElementById("box");
let x = 0;
let y = 0;
const moveAmount = 10;

document.addEventListener("keydown" , event => {

 if(event.key.startsWith("Arrow")){

     switch(event.key){

         case "ArrowUp":
             y -= moveAmount;
             break;
         case "ArrowDown":
             y += moveAmount;
             break;
         case "ArrowLeft":
             x -= moveAmount;
             break;
         case "ArrowRight":
             x += moveAmount;
             break;

     }
     box.style.top = `${y}px`;
     box.style.left = `${x}px`;
 }
    console.log(event.key);
})