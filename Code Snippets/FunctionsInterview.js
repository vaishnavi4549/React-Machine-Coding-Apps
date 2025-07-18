// Function declration
function Test(num){
    return num*num;
}

//Function Epression -> cnan be assiigned to a varibles
//function without name is called anynimous function
const square = function (num){
    return num*num;
}
square(5);

//First Class Functions - A function can be treated like a variable called FCF
// fun cab passed to another fun as param
// fun can be used/maniputlated and returned from a functions

function square(num){
    return num*num;
}
function displaySquare(fn){
    console.log("square is" + fn(5));
}
displaySquare(square);

// IIFE - Immediately Invoked Function Expression
// no need to call a fun
(function square(num){
    return num*num;
})(5);

  
//function scope - o/p
// if let -> 0,1,2,3,4
// if var -. 5,5,5,5,5 -> var doesn't have ablok scope
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

//function hoisting - if e call a fun before it's decalaration it won't gives a error
// as function are hoisted
//in case of var if we prin varible before decalaring it will give undefiend

//fun hoisting o/p
 var x=21;
 var fun = function(){
    console.log(x);
    var x=20;
 }
 fun();
//x - undefined ---- how undefined 
//hoisting first it initilaizeds all the variables so global ini then 
//local scope initialization where x is undefined and then we assigend the value 


//Params vs arguments
const square = function (num){ // when receives values to fun: Params
    return num*num;
}
square(5); // when pass values to fun: Arguments

//Arrow Functions
const test=(num)=> num*num;
//diff bet arrow fn & anynmous fn
    //syntax
    //implicit return keyword is there in arrow fn
    

