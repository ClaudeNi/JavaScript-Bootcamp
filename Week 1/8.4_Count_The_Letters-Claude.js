const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr) {
    const letters = {};
    for (let word of arr) {
        word = word.replace(/\s/g, '');
        for (let letter of word.toLowerCase()) {
            if (letters[letter] == undefined) {
                letters[letter] = 0;
            }
            letters[letter]++;
        }
    }
    return letters;
}

console.log(countLetters(array));