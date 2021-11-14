function longestWord(str) {
    if (!str.includes(" ")) {
        return str.length;
    }
    let words = str.split(" ");
    let length = 0;
    for (let i of words) {
        if (i.length > length) {
            length = i.length;
        }
    }
    const arr = [];
    for (let i of words) {
        if (i.length == length) {
            arr.push(i);
        }
    }
    return arr;
}