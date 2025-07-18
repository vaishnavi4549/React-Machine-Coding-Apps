
const retryWithDelay = async (
  fn, retries = 3, interval = 50,
  finalErr = 'Retry failed'
) => { 
   for(let i=0;i<retries;i++){
       console.log('heyy',Date.now(),i)
        try{
            return await fn();
        }catch(e){
            finalErr = e;
           await new Promise((res)=>setTimeout(res,interval))
        }
   }
    throw finalErr;
}

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error('Not yet');
    }
    
    return "completed !!"
  }
}
// Test the code
const test = async () => {
console.log('func called')
  let response = await retryWithDelay(getTestFunc(), 10);
  console.log('success',response);
  response = await retryWithDelay(getTestFunc(), 3);
  console.log('will fail before getting here',response);
}

// Print the result
test().catch(console.error);




const compareVersions=(s1,s2)=>{
    const splits1 = s1.split('.').map(Number);
    const splits2 = s2.split('.').map(Number);
    
    const len = Math.max(splits1.length,splits2.length);
    
    for(let i=0;i<len;i++){
        const bits1 = splits1[i] ? splits1[i] : 0;
        const bits2 = splits2[i] ? splits2[i] : 0;
        
        if(bits1>bits2) return 1;
        else if(bits1<bits2) return -1;
    }
    return 0;
}

console.log("Try programiz.pro");
console.log(compareVersions("1.2.0", "1.2.1")); // -1
console.log(compareVersions("2.0.1", "2.0.0")); // 1
console.log(compareVersions("1.2", "1.2.0")); // 0
console.log(compareVersions("1.10.1", "1.9.9")); // 1
console.log(compareVersions("2.0", "2.0.0")); // 0



[1,4,5,20,34,58,90]
















