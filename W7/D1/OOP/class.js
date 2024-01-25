class Human{
    constructor(name, hairColor){
        this.name = name
        this.hairColor = hairColor
    }

    sayHi(){
        console.log(`Hi my name is ${this.name}`);
    }
}

const josh = new Human("Josh", "Red");
const cam = new Human("Cameron", "Brown");

josh.sayHi();
cam.sayHi();

console.log(josh.hairColor);
console.log(josh);
console.log(cam);
console.log(cam.name);


class Student extends Human{
    constructor(name, hairColor, currentStack){
        super(name, hairColor) //names of attributes we want to inherit
        this.currentStack = currentStack
    }
}
// extends basically means inheret, all students are instances of a human and will inherit those attributes (name, hairColor). Extends alongside super() are how you allow this inheritance to occur

const anthony = new Student("Anthony", "Blonde", "MERN");
// Anthony can call on methods from Human class because Student class also inherited the Human class methods

anthony.sayHi();
console.log(anthony);

