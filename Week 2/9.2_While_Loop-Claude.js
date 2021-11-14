const populations = [125, 329, 9, 67];

function populationPercentages(arr) {
    const percentages = [];
    let i = 0;
    while (i < arr.length) {
        percentages.push(percentageOfWorld1(arr[i]));
        i++;
    }
    return percentages;
}
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}