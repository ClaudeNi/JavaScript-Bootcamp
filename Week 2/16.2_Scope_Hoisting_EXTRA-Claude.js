// Block 1
var x = 10;
console.log(x); // logs 10 into the console
if (true) {
    var x = 20;
    console.log(x); // logs 20 into the console
}
console.log(x); // logs 20 into the console


// Block 2
var x = 10;
console.log(x); // logs 10 into the console
if (true) {
    (function() {
        var x = 20;
        console.log(x); // logs 20 into the console
    })();
}
console.log(x); // logs 10 into the console

// Block 3
var x = 10;
console.log(x); // logs 10 into the console
function test() {
    var x = 20;
    console.log(x); // logs 20 into the console
    if (x > 10) { // enters the if
        let x = 30;
        console.log(x); // logs 30 into the console
    }
    console.log(x); // logs 20 into the console
}
test();
console.log(x); // logs 10 into the console

// Block 4
var x;
x = 10;
function test() {
    var x;
    if (x > 20) {
        x = 50;
    }
    console.log(x); // logs undefined
}
test();


// Block 5
function test() {
    var x, y;
    if (false) {
        x = 50;
    }
    console.log(x); // logs undefined
    console.log(y); // logs undefined
    y = 100;
    console.log(y); // logs 100
}
test();

// Block 6
function test() {
    foo(); // logs "foo"
    bar(); // error, function not defined
// Function defiened
// using function declaration
    function foo()
    {
        console.log('foo');
    }
// Function defined
// using function expression
    var bar = function() {
        console.log('bar');
    }
}
test();