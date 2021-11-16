const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.slice().sort());
console.log(foods.slice().sort().reverse());

//
console.log("");
const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

console.log(foodsWithUpperCase.slice().sort(function(a, b) {a.toLocaleLowerCase; b.toLocaleLowerCase}));
console.log(foodsWithUpperCase.slice().sort(function(a, b) {a.toLocaleLowerCase; b.toLocaleLowerCase}).reverse());

//
console.log("");
const words = ["apple", "supercalifragilisticexpialidocious", 
"hi", "zoo"]

console.log(words.slice().sort((a,b ) => b.length - a.length));