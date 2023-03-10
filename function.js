//function statement

function a(){
    console.log("a is called ");
}
//function expression
var b=function(){
    console.log("b is called");
}

// named function expression
var c=function d(){ //d()--named....
    console.log("c is called");
    console.log(d);
}


//first class function---it is used like a variable
function myFun(){  
    return function x(){

    }
}
//console.log(myFun());

function y(param){   // passing functions as parameters and return a function..
                     // it is a first class function...
    return param;
}
console.log(y(
    function z(){

    }
    ));


