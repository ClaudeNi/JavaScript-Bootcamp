// Using JS methods
function withJS(arr) {
    return arr.reverse();
}

// Using a For
function withFor(arr) {
    const nArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        nArr.push(arr[i]);
    }
    return nArr;
}

// Using a Recursive Function
function withRecursive(arr) {
    if (arr.length == 1) {
        return arr;
    }
    return withRecursive(arr.slice(1)).concat(arr[0]);
}

console.log(withRecursive(['h','e','l','l','o']));