const populations = [125, 329, 9, 67];

function populationPercentages(arr) {
    const percentages = [];
    for (let i of arr) {
        percentages.push(percentageOfWorld1(i));
    }
    return percentages;
}

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}