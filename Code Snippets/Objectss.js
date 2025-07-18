//OBJECTS
const user = {
    name:'test',
    age:20
}
console.log(user.name) //access
console.log(user[age]) //access
user.name = 'teste2' //update
delete user.age //delete
delete user[age]

//QUE 1
const func = (function (a){
    delete a;
    return a;
})(5);
console.log(func) //here it wll not delete the a it will simply return 5
//as a is the local variable ofr inner func
//delete willl be used to delete properties of objs not local variable

//Dynamic Key value to Object
const property = 'firstname'
const name = 'test';
const user = {
    property:name, //gives propet=test
    // we want firstname=test for that dynamic
    [property]:name
}

//print all keys ad values of object
for(key in user){
    console.log(key) //print the keys of object
    console.log(user[key]) //print the value of key
}

//QUE 1
const obj = {
    a:'one',
    b:'two',
    a:'three'
}
console.log(obj) // a:'three' b:'two'
//if we have 2 keys with he same name if will replace the value with new value for the irts key found

//QUE 2
//create function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2
let nums={
    a:100,
    b:200,
    title:'test'
}
multiplynmeric(nums)
function multiplynmeric(nums){
    for(key in nums){
        if(typeof nums[key]=='number'){
            nums[key] *= 2;
        }
    }
}


//QUE 3 IMP
const a={};
const b = {key:"b"}
const c={key:"c"}

a[b]=123;
a[c]=456

console.log(a[b]); //456 is the output :(
//a[b] -> b can not be assigned as a key to a obj as it's a obj itself it counld have been asiigend if b would be a string -> "[obj,obj]"=123
//a[c] -> again c itself is a obj -> [obj,obj]=456 so the value got overwritten 
//so a will have on eproperty [obj,obj] = 456
//if we access a[b] or a[c] - will get 456

//QUE 4
//what is JSON.strignify & json.parse
const user = {
    name:'test',
    age: 23
}  
console.log(JSON.stringify(user)) //conver obj into string
const clone  = JSON.stringify(user)
console.log(clone.name) //gives undefined
//to get value of name
clone =JSON.parse(user) //convert again into obj
console.log(clone.name) //test

//usecase -> storing data into local storage: setItems-> as we cannot store obj direcly to local storage
localStorage.setItem(test,clone)
localStorage.setItem(test,user) 

localStorage.getItem(test)//for firest correct obj
localStorage.getItem(test)//[obj,obj]

//QUE 5
console.log([..."abcde"]) 
//output-> it will spread all the characters into array of Charactrs ['a','b']
//...used to spread properties of an array/object

//QUE 6
const user = {name:'test',age:21}
const admin = {admin:true,...user};
console.log(admin);
//output : it will add all the properties of user t admin object

//QUE 7
//what is destructig obj : taking out specific properties of objects
const testDestruct = {
    nameProperty:'test',
    fullname:{
        firstname:'vaish',
        lastname:'kulvai'
    }
}
const {nameProperty} = user
console.log(nameProperty) // gives the test
const {fullname:{firstname}} = user //vaish


//QUE 8
//function getItems(fruitlist,...args,favfruit) -> ...args should always be the last parameter 
function getItems(fruitlist,favfruit,...args){
    return [...fruitlist,...args,favfruit]
}
console.log(getItems(['banana','apple'],"mango","orange")) //simply print all in one obj

//QUE 9 - >object refrencing
let x = {greeting:"hii"};
let y;

y=x 
x.greeting = 'Hello';
console.log(y.greeting)//Hello
//we simply share the refernce not the properties of object 
//as we changes the value of x.greeting and y has reference of X y's greeting will also change

//QUE 10
console.log({a:1}=={a:1}); //false
console.log({b:1}== {b:1});// even if it === then also false
// as each object has their own memory space

//QUE 11
let person = {name:'test'};
const member = [person];
person=null;

console.log(member);

//QUE 11 
//shallow copy and deep copy
//shallow :  a new obj that we created shared the same reference of those surce obj
// results in f you change either of them changes will  be occur t bth
//DEEP:source and copy obj are completely independent | no refernce

const user2={
    name:'vaish',
    age:23
}
const objclone = Object.assign({},user); //deeep copy - 1
const objclone2 = JSON.parse(JSON.stringify(user)) //deep copy 2
const objclone3 = {...uaer};

objclone.name ='test'
console.log(user,objclone) //will print vaish for user & test for objclone 

