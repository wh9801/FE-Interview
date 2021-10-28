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
const throttle = (func,wait)=>{
    
}