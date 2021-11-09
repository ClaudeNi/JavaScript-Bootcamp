let arr = Array(100).fill(1, 0);

let arr2 = Array.from({length: 100}, (_,index) => index + 1)

var obj = {
    a: "C#",
    b: "Python",
    c: "javascript!",
};
let arr3 = Object.values(obj);

Array.isArray(arr);

const arr4 = [1, 2];
const arr5 = [...arr4];

const arr6 = [1, 2, 3];
const arr7 = arr6;