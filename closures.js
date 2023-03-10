
 function makeAdder(x){
    const name="add number with "+x+" is";
    return function(y){ // return function inner(y)--same
        console.log(name,x+y)
        return x+y;
    }
    // return adder
}
// closures....
let add5=makeAdder(5)
// add5 is a innerFunction which binds 
// the value of the outer function
let add10=makeAdder(10)
console.log(add5(2),add10(2))
