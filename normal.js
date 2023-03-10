
function x(){
    var i=1;
    setTimeout(function(){
    console.log(" inner function "+i);
    },3000);
    console.log("x function");
}
// 

function y(){
    for(var j=1;j<=5;j++){  //output--6 6  6 6 6
        setTimeout(function(){  // using let j=1;---output=1 2 3 4 5;(block scope)
            console.log(j);
        },j*1000);
    }
    console.log("y function");
}
y();