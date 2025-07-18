//Lexical scope : a variable defined outside a function is accissible to inside after var 
//declaration but vice versa not possible
  
//Closures : function along with itslexical scope forms aclosure

//global scope
function subscribe(){
    var name = 'heyyyy';
    //inner scope 3
    function display(){
        //inner scope
        alert(name); //heyyyy
    }
    display()
}
subscribe()
//how the name is acible cause of closure
//accessing ele which are outside the  fun 
//closures gives the access to outter function from ineer fubn 
//closures make it possible to fun to have private vaiables and it controles what
//  is what isn't n the scope of function

//Closure Scope Chain
    //local scope
    //outer function scope
    //global scope

// global scope || chain 
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

//---------------------------------------------------------------
//Que 1: Output?
let count=0;
(function printCount(){
    if(count==0){
        let count=1; //shadowing
        console.log('inner',count); //1
    }
    console.log('outer',count); //0 
})();

//Que:write fun tahat would allow to do this
var addSix = createBase(6)
addSix(10) //16
addSix(21) //27

//ans
function createBase(num){
    return function (innernum){
        console.log(innernum+num);
    }
}

//que: Block acope and timeout
function test(){
    for(var i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i);
        },1000);
    }
}
test();
//op: 3 after each second as Var is the function scope 
//as the reference gets created at ech i then override the value as per refernce then 
//settiout executes and take latest vaue which is 3 
//once we chnage it let it works as expected as it's block scoped

//que: print 1 2 3 without using let
function test(){
    for(var i=0;i<3;i++){
        function inner(i){ // i here is treated as local variable
            setTimeout(function log(){ 
                console.log(i);
            },1000);
        }
        inner(i);
    }
}
test();
//for each iteration it will create new function scope resulting not updating theref like var did
//it will create new ref for each ite and print in sequence


//Que: How would you use cloure to craete private counter
function counter(){
    var counter=0; 
    function add(incr){
        counter+=incr;
    }
    function getCounter(){
        return "counter=" + counter
    }
    return{
        add,
        getCounter
    }
}
const c = counter();
c.add(5);
a.add(10);
console.log(c.getCounter()) //15
// we are not directly manupultaing the counetr we are uifng functions to do it
