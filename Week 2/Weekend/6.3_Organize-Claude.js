function longestOrganizedWord(str1, str2) {
    let obj = str1.split("").reduce((letters, val) => {
        letters[val] = val;
        return letters;
    }, {})
    obj = str2.split("").reduce((letters, val) => {
        letters[val] = val;
        return letters;
    }, obj)
    return Object.values(obj).sort();
}
