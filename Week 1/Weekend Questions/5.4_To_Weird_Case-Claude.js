function toWeirdCase(str) {
    let nStr = "";
    let checker = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            checker = true;
            nStr += " ";
            continue;
        }
        if (checker) {
            nStr += str[i].toUpperCase();
            checker = false;
        } else {
            nStr += str[i];
            checker = true;
        }
    }
    return nStr;
}