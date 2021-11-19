// 元素为数组时递归调用
function flatten1(arr) {
    if (!Array.isArray(arr))
        return;
    let res = [];
    res = arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten1(cur) : cur);
    }, []);
    return res;
}

// 使用Array.toString()
function flatten2(arr) {
    return arr.toString().split(",").map(item =>  +item);
}

// 使用flat
console.log([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]].flat());

// console.log(flatten2([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]));
// console.log(flatten1([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]));

