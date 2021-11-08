// 使用填坑法，一次划分后，有一个元素的最终位置确定了
function partition(arr, start, end) {
    // 以第一个元素作为划分值
    let t = arr[start];
    while (start < end) {
        // 向左遍历，找到比划分值小的，填入坑中
        while (arr[end] >= t && start < end) {
            end--;
        }
        arr[start] = arr[end];

        // 向右遍历，找到比划分值大的，填入坑中
        while (arr[start] <= t && start < end) {
            start++;
        }
        arr[end] = arr[start];
    }
    // 将划分值填入正确的位置
    arr[start] = t;
    return start;
}

function quickSort(arr, start, end) {
    if (!Array.isArray(arr) || arr.length <= 1 || start >= end)
        return;
    let mid = partition(arr, start, end);
    quickSort(arr, start, mid - 1);
    quickSort(arr, mid + 1, end);
}

let a = [3,2,1,0];
quickSort(a,0,3);
console.log(a);