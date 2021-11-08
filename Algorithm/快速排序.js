function partition(arr, start, end) {
    let t = arr[start];
    while (start < end) {
        while (arr[end] >= t && start < end) {
            end--;
        }
        arr[start] = arr[end];
        while (arr[start] <= t && start < end) {
            start++;
        }
        arr[end] = arr[start];
    }
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