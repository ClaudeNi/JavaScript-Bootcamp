function doubleValues(arr) {
    return arr.map(function(num) {
        return num * 2;
    })
}

function onlyEvenValues(arr) {
    const evenArr = [];
    arr.forEach(function (num) {
        if (num % 2 == 0) {
            evenArr.push(num);
        }
    });
    return evenArr;
}

function showFirstAndLast(arr) {
    const nArr1 = []
    arr.forEach(function(item) {
        if (typeof(item) == "string") {
            nArr1.push(item);
        }
    })
    const nArr2 = [];
    nArr2.push(nArr1[0]);
    nArr2.push(nArr1[nArr1.length - 1]);
    return nArr2;
}

function vowelCount(str) {
    const letters = {};
    str.toLowerCase().split("").forEach(function(char) {
        if (letters[char] == undefined) {
            letters[char] = 0;
        }
        letters[char]++;
    })
    return letters;
}

function capitalize(str) {
    var nStr = "";
    str.split("").forEach(function(char) {
        nStr += char.toUpperCase();
    })
    return nStr;
}

function shiftLetters(str) {
    var nStr = "";
    str.split("").forEach(function(char) {
        nStr += String.fromCharCode(char.charCodeAt() - 1);
    })
    return nStr;
}

function swapCase(str) {
    var nStr = "";
    str.split(" ").forEach(function(word, idx) {
        if (idx % 2 == 0) {
            nStr += capitalize(word);
        } else {
            nStr += word;
        }
        nStr += " ";
    })
    return nStr;
}

