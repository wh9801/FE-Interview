// instanceof 判断构造函数的prototype属性是否出现在实例对象原型链上
let arr = [1];
console.log(arr instanceof Array);
function myInstanceOf(left, right) {
    let proto = Object.getPrototypeOf(left),
        prototype = right.prototype;
    while (true) {
        if (!proto) {
            return false;
        }
        if (proto === prototype) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
}
console.log(myInstanceOf(arr, Array));