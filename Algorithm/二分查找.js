let search = function (nums, target) {
    let right = nums.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}


console.log(search([-1, 0, 3, 5, 9, 12], 5));