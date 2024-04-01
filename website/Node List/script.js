let buttons = document.querySelectorAll(".buttons");



buttons.forEach(button => {  
    button.style.backgroundColor = "green";
    button.style.color = "white";
})


buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor = "pink";
    })
})


buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor = "blue";
    })
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "red";
    })
})
//add an element

// const newButton = document.createElement("buttton");//step 1
// newButton.textContent = "Button 5";//step 2
// newButton.classList = "buttons";
// document.body.appendChild(newButton);//step3

// buttons = document.querySelectorAll(".buttons");

// console.log(buttons)

//REMOVE an element

buttons.forEach(button =>{
    button.addEventListener("click" ,event =>{
        event.target.remove();
    })
})






