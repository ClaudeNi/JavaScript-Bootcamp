function dupes(str) {
    const obj = str.split('').reduce((lettersObj, letter) => {
        lettersObj[letter.toLowerCase()] = (lettersObj[letter.toLowerCase()] || 0) + 1;
        return lettersObj;
    }, {})
    objArr = Object.entries(obj).filter(letter => letter[1] > 1);
    let nStr = `${objArr.length} #`;
    objArr.forEach(letter => {
        nStr += ` '${letter[0]}' occurs ${letter[1]} times`;
        if (objArr.length > 1 && objArr[objArr.length - 1] != letter) {
            nStr += " and";
        }
    })
    return nStr;
}