//Encapsulation 

class Student {
    constructor (name,age){
        this.name=name;
        this.age=age;
    }
    showDetails(){
        console.log(`Name: ${this.name},Age: ${this.age}`);
    } 
}
let s1= new Student("Hari",21);
s1.showDetails();