var intersect = function(nums1, nums2) {
    if(nums1.length > nums2.length){
        return intersect(nums2,nums1);
    }
    let map = new Map();
    for(let v of nums1){
        if(map.has(v)){
            map.set(v,map.get(v)+1);
        }
        else
            map.set(v,1);
    }
    let res = [];
    for(let v of nums2){
        if(map.has(v) && map.get(v) >0){
            res.push(v);
            map.set(v,map.get(v)-1);
        }
    }
    return res;
};

intersect([1,2,2,1],[2,2]);