const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

function compareArrays(arr1, arr2) {
    let finalArr = [];
    for (let i of arr1) {
        for (let j of arr2) {
            if (i.toLowerCase() == j.toLowerCase()) {
                finalArr.push(j);
            }
        }
    }
    return finalArr;
}