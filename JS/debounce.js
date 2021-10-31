// arrow function
const debounce = (func, wait) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}

// normal function
function _debounce(func, wait) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
            timer = null;
        }, wait)
    }
}

// const fun1 = (func) =>{
//     return ()=>{
//         func();
//     }
// }

// const fun2 = ()=>{
//     console.log("fun2!!!");
// }

// fun1(fun2)();