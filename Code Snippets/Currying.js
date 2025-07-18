//Currying
//Currying is a functional programming technique where a function with multiple 
//arguments is transformed into a series of functions, each taking a single argument.
//Instead of taking all arguments at once, the curried function takes the first argument,
//returns a new function that takes the next argument, and so on until all arguments are provided. 
//The final function then returns the result.
//number of function currying has is number of argument it takes



//normal function
function f(a,b){
    return a+b;
}

//currying fun
function f(a){
    return function(b){
        return a+b;
    }
}

console.log(f(5))// prints function as it return fun as it expect another funtion
console.log(f(5)(9)) // will return addition here

//Que 2
//Convert sum(2,6,1) to sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(2)(6)(1));

//QUE 3:  Write a currying function that takes infinite arguments.
//console.log(add(5)(2)(4)(5)())

function add(a){
    return function(b){
        if(b) return add(a+b);
        return a;
    }
}
console.log(add(5)(2)(5)(2)())
// at each it will check i b has something then it will add it prv calculations
// the last empty () indictaed that it has no param to add so will return a which will be ans;

//QUE Curry() implementation
//convert sum(a,b,c) into sum(a)(b)(c)

function curry(func){
    //take all args as array of arg
    return function curryFunction(...args){
        //args length will change
        //func length is no of args
        if(args.length>=func.length){
            return func(...args)
        }else{
            return function(...next){
                return curryFunction(...args,...next);
            }
        }
    }
}

const sum = (a,b,c)=>a+b+c;
const totalsum = curry(sum);
console.log(totalsum(1)(2)(3))