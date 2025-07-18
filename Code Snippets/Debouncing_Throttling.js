//Debouncing and throttling are techniques used to optimize the performance of functions 
//triggered by events that occur frequently, such as scrolling, resizing, or typing

//Debouncing: is a technique where you delay the execution of a function until after 
// a certain amount of time has passed.

//No matter how many times the user fires the event, the connected function will only 
// run once the user stops firing the event, according to the Debouncing approach

//conside an example where we are fetching the info as per user added query in text field
//without debounce verytime user hits text evebnt that xyz function gets called
///in ths case the function will wait for 1 sec it will only call the fubction if there 
// are no chnages in input field 
//if you ad any char to i/p string it will again wait 1 sec

const input = document.querySelector('input');
const debounceText = document.getElementById('debounce');

//callback after delay gets called
const updateDebounceText= debounce((text)=>{
    debounceText = text
})

input.addEventListener("input",e=>{
    updateDebounceText(e.target.value)
})
function debounce(cb,delay=1000){
    return(...args)=>{
        //forcing our function to wait for 1 sec
        //everytime debounce gets called first should ret the timer
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
           cb(...args)
        },delay);
    }
}

//OR Example 2
function delayFuncExec() {
    console.log("I AM GFG ");
}

let timerId = setTimeout(delayFuncExec, 1000)

console.log("Timer Id: " + timerId);




//Throttling
//A throttle function ensures that a particular function is only called at most once 
// in a specified time interval, no matter how many times it’s triggered.

// /This is useful when a function, such as a mousemove or keydown event listener, 
// may be called repeatedly but need not be run each time.
const updateThrottleText= debounce((text)=>{
    debounceText = text
})
function throttle(cb,delay=1000){
    //only call this function when shouldwait is false
    let shouldwait = false
    return(...args)=>{
        //it will directly call the fun firts 
        //then wait for some time to check 
        // if anything changes in that time span
        if(shouldwait) return
        cb(...args)
        shouldwait=true
        setTimeout(()=>{
            shouldwait=false
        },delay)
    }
}