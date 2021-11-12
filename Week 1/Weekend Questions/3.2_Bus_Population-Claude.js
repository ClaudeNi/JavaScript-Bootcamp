function busPeople(arr) {
    let people = 0
    for (let i of arr) {
        people = people + i[0] - i[1];
    }
    return people < 0 ? 0 : people;
}