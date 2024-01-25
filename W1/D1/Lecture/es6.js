// Global, function and block scope 

// ! The global scope is the scope that contains, and is visible in, all other scopes

let personOne = "Caden Wilcox";
// personOne = "some"

if(personOne === 'Caden Wilcox'){
    let personOne = 'Bob Ross'
    console.log('Inside if statement', personOne);
}

console.log(personOne);

// ! Function scope variables are only accessable inside the function they are declared in (a nested function would have access to variables declared in the parent function)
const sayHi = () => {
    var newName = 'Chris'
    console.log('Hi', newName);
}
sayHi()
// console.log('Hi', newName);

// ! Block scope a block is defined by a set of curly brackets

const logNums = (nums) => {
    for (var idx = 0; idx < nums.length; idx++) {
        // const element = nums[idx];
        console.log(`the num is ${nums[idx]} at index ${idx} `);
    }
    // console.log('final index', idx);
}
logNums([1,2,3,4])

// * const variables. means constant they cannot change BUT if you have an object or an array stored in a const variable you can manipulate the data inside
const newName = 'Todd'

const person = {
    name: "Robert Smith",
    age: 32,
    isMusician: true,
}

console.log(person)

person.age = 43

console.log(person)

// * destructuring and rest/spread operator 

// * Destructuring: easily pull out values inside an array or object 
// * rest/spread operator: spread out values inside an array or object we can do this to make copies of the data and also manipulate it this will be a common thing we do in React

let {name, age} = person // Essentially creating 2 variables which are name and age and grabbing the values from the keys name and age and assigning them to those variables. Curly brackets indicate object
console.log(name, age)

// const age = person.age
let {name:robert, ...restOfTheObject} = person // we have pulled the value accociated with name ("Rober Smith") and assigned it to the variable name robert. Where as age pulled value from age key value pair and just called the variable age
// console.log(person);
console.log(robert, restOfTheObject);

const updatedPerson = {...person, age:33}
console.log(updatedPerson);

let evenNums = [2,4,6,8,10];
let [num1,num2,, ...everythingElse] = evenNums
console.log(everythingElse);
let names = ['Caden', 'Ben', 'Amy', 'Lindsey'];