console.log('a');
setTimeout(() => { console.log('b') }, 1000);
new Promise((res, rej) => {
    res('c')
}).then(data => console.log(data));
setTimeout(() => {console.log('e')});
console.log('d');

//a->d->c->e->b
// console.log('a'): Synchronously prints 'a'.
// setTimeout(() => { console.log('b') }, 1000);: Schedules a delayed execution for 1000ms (1 second), so b will be printed later.
// new Promise(...).then(...): The promise resolves synchronously with 'c', but since .then() is asynchronous (microtask), it gets queued and will execute after the current stack completes.
// setTimeout(() => { console.log('e') });: Schedules e to be logged after a 0ms delay (next macrotask).
// console.log('d'): Synchronously prints 'd'.

const myObjectTest = {
    message: 'Hello, World!'
  };
function logMessage() {
  console.log(this.message); // logs 'Hello, World!'
}
//logMessage.call(myObject);
logMessage.call(myObject);
//bind/apply/apply

const myObjectTest2 = {
    who: 'World',
    greet() {
      return `Hello, ${this.who}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.who}!`;
    }
  };
console.log(myObject.greet());    // Hello World!: The greet function is a regular function, so this refers to myObject.
// Therefore, this.who resolves to 'World', and the output will be "Hello, World!"
console.log(myObject.farewell()); // Goodbye undefined!
// is an arrow function, so the value of this is lexically bound to the scope in which the function was defined.
// In this case, the function is defined inside the object myObject, but it doesn't get myObject's this. Instead,
//  it gets the this of the surrounding environment 
// (which is typically the global scope or module scope).
// In the global scope, there is no who property, so this.who in the arrow function results in undefined.
//In this case, this in the farewell method does not refer to myObjectTest2, but rather to the global context (in Node.js, it's {}, not the object itself).

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); //true
console.log(a === b); //false : Since a is a primitive number (3), and b is an object of type Number, the comparison returns false.
console.log(b === c); //false

//diff of both
//interfaces
// Extensibility: Interfaces can be extended using the extends keyword. 
// This makes interfaces more flexible in cases where you need to merge multiple interfaces
//  or inherit from another interface.
// Declaration Merging: If two interfaces with the same name are declared, TypeScript merges them automatically, 
// allowing you to add properties incrementally.

//Type
//Extensibility: Types cannot be extended directly as interfaces can. You have to use intersections (&) for combining types.
// No Declaration Merging: If two types with the same name are declared, TypeScript will throw an error. 
// Types are not merged as interfaces are.
interface test{
    user:String;
}
type test{
    user:String;
}

// In TypeScript, when two interfaces with the same name are declared, TypeScript automatically merges them.
// The resulting User interface will look like this: User{name:string,age:number}
interface User {
    name: string
}

interface User {
    age: number
}

//alternavie of any keyword in typescript is unknow
const myObject={
    name:'test'
}

let anyValue: any;
let unknownValue: unknown;
anyValue = 123;
unknownValue = 123;

console.log('heyy',anyValue)

anyValue.toUpperCase(); //TypeError: anyValue.toUpperCase is not a function
unknownValue.toUpperCase();//TypeScript will throw a compile-time error: Object is of type 'unknown'

//usereducer
//react 18 & 16 & 14 different features
