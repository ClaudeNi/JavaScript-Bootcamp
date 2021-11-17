// Block 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

/*
we get "undefined" logged into the console
we get 2 logged into the console
variable a gets the data 1 put into it
*/

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/* 
we get "Aurelio De Rosa" logged into the console
variable test gets the function put into it
we get "undefined" logged into the console
*/

// Block 3
function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);

/*
we get undefined logged into the console
we get number logged into the console
*/

// Block 4
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();

/*
we get "2" logged twice
*/

// Block 5
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);

/*
we get 1 logged into console but also get an error for the 2nd log because e is not defined
*/

// block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();

/*
we get the same sentence logged twice but at the end where the variable f is at, once we get undefined and the other is 1.
*/