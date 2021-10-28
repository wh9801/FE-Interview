// arrow function
// use setTimeout
const throttle = (func, wait) => {
    let timer;
    return () => {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            func();
            timer = null;
        }, wait);
    }
}

// use timestamp
const _throttle = (func,wait)=>{
    let last_time = 0;
    return()=>{
        const current_time = +new Date();
        if(current_time-last_time>wait){
            func.apply(this,arguments);
            last_time= +new Date();
        } 
    }
}

let str = "123";
let num = +str;
let num1 = +new Date();
console.log(str,num,num1);