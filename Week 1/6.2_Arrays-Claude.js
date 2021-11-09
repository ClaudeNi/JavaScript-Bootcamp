const people = ["Greg", "Mary", "Devon", "James"];

for (let i of people) {
    console.log(i);
}

people.shift();
people.pop();
people.unshift("Matt");
people.push("Claude");

for (let i of people) {
    console.log(i);
    if (i == "Mary") {break;}
}

const arr = people.slice(2);
people.indexOf("Mary");
people.indexOf("Foo");

people.splice(2, 1, "Elizabeth", "Artie");
const withBob = people.concat(["Bob"]);