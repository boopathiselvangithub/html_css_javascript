function Person(name,age,location){
    this.name=name;
    this.age=age;
    this.location=location;
    this.details=function(){
        console.log("Name :"+this.name);
        console.log("Age :"+this.age);
        console.log("Location :"+this.location);
    };
}
const person1=new Person("Boopathi Selvan",21,"Udumalpet");
const person2=new Person("Bhoomish",21,"Tirupur");
person1.details();
person2.details();
