function myFunction(name,age,location){
    const obj={};
    obj.name=name;
    obj.age=age;
    obj.location=location;
    obj.selfIntro=function(){
        console.log("Hi! I am "+this.name);
    };
    return obj;
}
const person1=myFunction("boopathi",22,"udumalpet");
const person2=myFunction("selvan",21,"coimbatore");
console.log(person1.name+"\n"+person2.name);
console.log(person1.age+"\n"+person2.age);
console.log(person1.location+"\n"+person2.location);
person1.selfIntro();
person2.selfIntro();