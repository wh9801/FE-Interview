// 使用Set
function unique1(arr){
    if(!Array.isArray(arr) || arr.length <=1)
        return;
    return [...new Set(arr)];
}

// 使用indexOf()
function unique2(arr){
    if(!Array.isArray(arr) || arr.length <=1)
        return;
    let res = [];
    arr.forEach((item)=>{
        if(res.indexOf(item) === -1){
            res.push(item);
        }
    })
    return res;
}

console.log(unique1([0,0,1,1,2,2]));
console.log(unique2([0,0,1,1,2,2]));

