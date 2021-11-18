function mumble(str) {
    let nStr = "";
    for (let i = 0; i < str.length; i++) {
        nStr += str[i].toUpperCase();
        for (let j = 1; j < i + 1; j++) {
            nStr += str[i];
        }
        if (i < str.length - 1) {
            nStr += "-";
        }
    }
    return nStr;
}