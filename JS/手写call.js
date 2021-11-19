Function.prototype.myCall = function (context) {
    if (typeof this !== "function") {
        console.error("type error");
    }
    let args = [...arguments].slice(1),
        result = null;
    context = context || window;
    // 将调用函数（this）赋值为对象的方法
    context.fn = this;
    result = context.fn(...args);
    delete context.fn;
    return result;
}

function _print() {
    console.log(this);
}
let a = [1, 2]
_print.myCall(a);
