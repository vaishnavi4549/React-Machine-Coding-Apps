//Scope
//block scope || global scope || function scope
//var is function dcope 
//let and const are block acope

//variable shadowing
//if try to shadow let with var it will be illigal shawing as let is block scope and trying to shaow shadow with var

function test(){
    var a='hello';
    let b='hi';
    if(true){
        let a="hi";
       // var b ="hello"; //Cannot redeclare block-scoped variable 'b' illigal shawing
        console.log(a);
        console.log(b);
    }
}
test();

//Declarations
var a;// we can redeclare var as many times we want as it gets override new var with old one
let a; // we cannot redecalre a variable using let in the same scope 
const a=0; //same like cannot redeclare

//Declaration without initialization
var a; //allowed without inilization - takes undefined default
let a; //allowed without inilization - takes undefined default 
const a=0; // has to be initialized but can be reassigend a value to it


//HOISTING
//during the creation phase of Execution Context JS moves all the declaration to the top of program
//called hoisting

console.log(a); // it won't throw error as have undefined it got duing ceation phase 
var a=1;
//Let don't allow you to use variable before initialization
//Temporer dead zone - timing bet declaration & inilization of let & const variables
//TDZ - contains all let & const which are in the scope but not yet initilized
// let will be store in TDZ which will not be in global scope
//LET nd CONST are hoisted in temporty Dead zone
console.log(b);// cannot access b before initialization
let b=2;


//hoisting o/p
function abc(){
    console.log(a); //undefined as global scope declaration happend before inilization
    console.log(b)//cannot acces before declaration as hoisted in TDZ
    console.log(c)//cannot acces before declaration as hoisted in TDZ
    var a=10;
    const c=30;
    let b=20;
}
