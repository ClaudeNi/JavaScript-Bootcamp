// my own filter method
Array.prototype.myFilter = function(func) {
    const arr = [];
    for (let i of this) {
        if (func(i)) {
            arr.push(i);
        }
    }
    return arr;
};

// my own find method
Array.prototype.myFind = function(func) {
    for (let i of this) {
        if (func(i)) {
            return i;
        }
    }
    return undefined;
};