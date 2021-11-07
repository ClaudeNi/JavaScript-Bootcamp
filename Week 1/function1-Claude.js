let answer1 = describeCountry("Finland", "5.531 million", "Helsinki");
let answer2 = describeCountry("Japan", "125.8 million", "Tokyo");
let answer3 = describeCountry("United States of America", "329.5 million" , "Washington, D.C.");

console.log(answer1);
console.log(answer2);
console.log(answer3);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}