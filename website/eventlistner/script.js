const myBox = document.getElementById("myBox");
const btn = document.getElementById("btn");

 function changeColor(event){
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
    event.target.textContent = "yees good!";
    }
myBox.addEventListener("click",changeColor);

myBox.addEventListener("click",function(event){
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
    event.target.textContent = "yees good!";    
})

myBox.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    event.target.textContent = "Mouseover";    
})

myBox.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.textContent = "Mouseout";    
})

btn.addEventListener("mouseout",event =>{
    event.target.style.backgroundColor = "black";
    event.target.style.color = "white";
    event.target.textContent = "Mouseout";   
})

btn.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor = "red";
    event.target.style.color = "white";
    event.target.textContent = "Mouseover";
})

btn.addEventListener("click",event =>{
    event.target.style.backgroundColor = "pink";
    myBox.style.backgroundColor = "red";
})



