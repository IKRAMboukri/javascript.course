//local
function fun1(){
    let x = 3;
    console.log(x);
}

function fun2(){
    let x = 3;
    console.log(x);
}
fun1();
fun2();

//global
let x =5;
function fun3(){
    let x =1
    console.log(x);
}

function fun4(){
    
    console.log(x);
}
fun3();
fun4();
