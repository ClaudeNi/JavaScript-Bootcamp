function findUnique(arr) {
    arr.sort();
    return arr[0] == arr[1] ? arr.pop() : arr[0];
}