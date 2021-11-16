function extractOnlyValue(arr, key) {
    return arr.reduce((nArr, val) => {
        nArr.push(val[key]);
        return nArr;
    }, []);
}

function countOnlyVowels(str) {
    return str.split(" ").join("").split("").reduce((vowels, val) => {
        vowels[val.toLowerCase()] = (vowels[val.toLowerCase()] || 0) + 1;
        return vowels;
    }, {})
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((nArr, obj) => {
        obj[key] = value;
        return nArr;
    }, arr)
}

console.log(addKeyAndValue([{name: "name1"}, {name: "name2"}], "id", 1));