const nums = [1, 5, 9, 16, 32, 4, 11, 22, 18, 26, 21];

function max(arr) {
    return arr.reduce((max, val) => Math.max(max, val));
}

function sumOfEvens(arr) {
    return arr.reduce((sum, val) => val % 2 == 0 ? sum + val : sum, 0);
}

function avg(arr) {
    return arr.reduce((sum, val) => sum + val, 0) / arr.length;
}