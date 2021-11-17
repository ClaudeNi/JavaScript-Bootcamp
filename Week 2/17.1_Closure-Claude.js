// Block 1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2)

/*
result will equal 5 because b = 5 and we return b
*/

// Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);

/*
1 gets logged because a = 1.
*/

// Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}

/*
it prints out 3, 3 times
*/