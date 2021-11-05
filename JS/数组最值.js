function findMax(arr){
    if(!Array.isArray(arr))
        return;
    return Math.max.apply(null,arr);
}

function findMin(arr){
    if(!Array.isArray(arr))
        return;
    return Math.min.apply(null,arr);
}

console.log(findMax([1,2,3]));
console.log(findMin([1,2,3]));