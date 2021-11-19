// 浅拷贝
function shallowCopy(obj) {
    if (!obj || typeof obj !== "object")
        return;

    let newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            newObj[key] = obj[key];
    }
    return newObj;
}

/**
 * 对象属性方括号法和点表示法的不同： obj.attr, obj[attr]
 * 
 * 1. 方括号法是动态访问，可以在运行时创建和修改属性；点表示法在对象没有此属性时无法编译
 * 
 * 2. 方括号法可以用变量、数字、或者特殊字符访问（如空格），点表示法不行
 */

let o1 = { a: 1, b: [1, 2, 3], c: 'abc' };
let o2 = shallowCopy(o1);
o1['b'].push(4);
o2['b'].push(5);
console.log(o1);
console.log(o2);

// 深拷贝1，使用递归，兼容性好
const deepClone = (obj) => {
    // 定义一个映射，初始化的时候将 obj 本身加入映射中
    const map = new WeakMap()
    map.set(obj, true)
    // 封装原来的递归逻辑
    const copy = (obj) => {
       if (!obj || typeof obj !== 'object') {
          return {}
       }
       const newObj = Array.isArray(obj) ? [] : {}
       for (const key in obj) {
          const value = obj[key]
          // 如果拷贝的是简单类型的值直接进行赋值
          if (typeof value !== 'object') {
             newObj[key] = value
          } else {
              // 如果拷贝的是复杂数据类型第一次拷贝后存入 map
             // 第二次再次遇到该值时直接赋值为 null，结束递归
             if (map.has(value)) {
                newObj[key] = null
             } else {
                map.set(value, true)
                newObj[key] = copy(value)
             }
          }
       }
       return newObj
    }
    return copy(obj)
 }

let o3 = { a: 0, b: [0, 0], c: 'abc' };
let o4 = deepClone(o3);
o3.b.push(0);
console.log(o3);
console.log(o4);

// 深拷贝2，使用JSON.Stringfy()，缺点是无法转换函数类型属性值
function deepCopy2(obj) {
    if (!obj || typeof obj !== "object")
        return;
    return JSON.parse(JSON.stringify(obj));
}

let o5 = { b: [0], c: 'abc' };
let o6 = deepCopy2(o5);
o6.b.push(0);
console.log(o5);
console.log(o6);
console.log(typeof JSON.stringify(o5));