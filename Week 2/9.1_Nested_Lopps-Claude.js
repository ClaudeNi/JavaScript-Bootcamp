const listOfNeighbours = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];

for (let i of listOfNeighbours) {
    for (let neighbour of i) {
        console.log(`Neighbour: ${neighbour}`);
    }
}