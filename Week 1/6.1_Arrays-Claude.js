const arr = [1,7,3,0,-5,7,3,9];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

function arrayLength(arr) {
    let length = 0;
    for (let i of arr) {
        length++;
    }
    return length;
}

function arraySum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
    return sum;
}

function arrayMulti(arr) {
    let multi = 1;
    for (let i of arr) {
        multi *= i;
    }
    return multi;
}