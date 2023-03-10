const person={
    name:"boopathi",
    age:21,
    bio:function(){
        console.log("my name is "+this.name+","+this.age+" years old")
    }
}
function myFun(PropertyName){
  console.log(person[PropertyName]) // in these we can use the brackets to access..
}
console.log(person["name"]) // also accessible
myFun("age")
person.bio()
