//CALL 
//So .call() is very useful when I want to control the context in which a function is executed, 
//especially in cases of inheritance, function reuse, or dynamic binding of this.
const obj = {name:'vaish'}
function sayHello(args){
    return "hello" + this.name + "age is" + args;
}
sayHello();//hello: as there is no name inside window object

//we want to prrint hello vaish use CALL
// it will take object to be used and list of args fot that fun to be called

sayHello.call(obj,24)//this.name inside sayhello will now point to obj

//APPLY
//similar to call just send arg is goint to be array of args
const obj2 = {name:'vaish'}
function sayHello(age,loc){
    return "hello" + this.name + "age is" + age + "lives in"+ loc;
}
console.log(sayHello.apply(obj2,[24,"bangalore"]))

//BIND 
//creaetes teh reusable functions 
//bind provide a function that can be used later on
const bindfun = sayHello.bind(obj);
console.log(bindfun(24));

//QUE 1
const age=10
var  person={
    name:'vaish',
    age:20,
    getAge:function(){
        return this.age;
    }
}
var person2 = {age:24}
person.getAge() //20
person.getAge.call(person2); //24 : simply it has binded to peosn 2 age

//QUE 2
//call printanimals such that it prints animals in obj
const animals= [
    {species:'lion', name:'king'},
    {species:'whale',name:'queen'}
]

function printAnimal(i){
    this.print = function(){
        console.log("#"+i+" "+ this.species + " "+ this.name);
    }
    this.print()
}
printAnimal.call()//undefined
printAnimal.call(animals) //undefined
for(let i=0;i<animals.length;i++){
    printAnimal.call(animals[i],i) 
}
//#0 lion king
//#1 whale queen

//QUE 3
//append an array to aother array
//concat & for can do it but a  new way
const arr1 = ['a','b']
const arr2 = [1,2,3,4];
arr1.push(arr2)
console.log(arr1) // it will be a b and array of 4 ele

//apply takes arr as arg ans will append to arr1
arr1.push.apply(arr1,arr2); //['a', 'b', 1, 2, 3, 4]

//QUE4
//find min /ma using apply
const numbers = [1,2,3,4,5,6]
console.log(Math.min.apply(null,numbers)) //min 
console.log(Math.max.apply(null,numbers)) //max

//QUE5
//bound function
function f(){
    console.log(this)//? this will pont to window object
}
let user = {
    g:f.bind(null)// this will return us another fun as using bind method with contet of null
}
user.g();


//QUE : Bind chaining
function f(){
    console.log(this.name);
}
f=f.bind({name:"vaish"}).bind({name:'kulkarni'});
f() // vaish
//as if the peticular fun is bound to a specific obje it won't changes
//bind chaningi ng deoes not eis

//QUE : Explicite binding with arraow function
const myage=20;
var peroson = {
    name:'vaish',
    myage:30,
    getAgeArrow:()=>console.log(this.age),
    getAge:function(){
        console.log(this.age);
    }
}
var person2 = {age:22}
peroson.getAgeArrow.call(person2); //undefined
peroson.getAge.call(person2);//22

//QUE: Polyfill of call method IMP
//in normal case
let car={
    color:'red',
    company:'ferrari'
}
function purchase(price){
    //as this is currently pointin gto global scope
    console.log('hyeyyy',this.color,this.company,price)
}
purchase.call(car,10000000)
//we want to invoke this fun on the car obj
//--------------------------
//POLYFILL
