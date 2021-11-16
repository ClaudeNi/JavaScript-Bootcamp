// whos faster in filling
const obj = {};
console.time("Test 1 obj");
for (let i = 0; i < 1000000; i++) {
    obj[i] = i;
}
console.timeEnd("Test 1 obj");

const objMap = new Map();
console.time("Test 1 maps");
for (let i = 0; i < 1000000; i++) {
    objMap.set(i,i)
}
console.timeEnd("Test 1 maps");

//whos faster in finding a specific property
console.time("Test 2 obj");
obj[420];
console.timeEnd("Test 2 obj")

console.time("Test 2 maps");
objMap.get(420);
console.timeEnd("Test 2 maps");

//whos faster in adding an entry
console.time("Test 3 obj");
obj["name"] = "name";
console.timeEnd("Test 3 obj");

console.time("Test 3 maps");
objMap.set("name", "name");
console.timeEnd("Test 3 maps");

//whos faster in deleting an entry
console.time("Test 4 obj");
delete obj[420]
console.timeEnd("Test 4 obj");

console.time("Test 4 maps");
objMap.delete(420);
console.timeEnd("Test 4 maps");