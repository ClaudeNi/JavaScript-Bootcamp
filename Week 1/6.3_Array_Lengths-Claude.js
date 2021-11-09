function arrayStringLength(arr) {
    let nArr = [];
    for (let i of arr) {
        nArr.push(i.length);
    }
    return nArr;
}