function hello(callback){
    console.log("hollo");
    callback()
}
hello(goodbye)



function goodbye(){
    console.log("goodbye");
    
}

function leave(callback){
    console.log("leave");
    callback();
}
leave(goodbye);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}


sum(displayConsole, 2 ,3)


sum(displayPage, 2 ,3)