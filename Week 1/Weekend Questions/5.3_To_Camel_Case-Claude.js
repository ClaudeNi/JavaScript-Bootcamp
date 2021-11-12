function toCamelCase(str) {
    let nStr = "";
    let checker = false;
    for(let i = 0; i < str.length; i++) {
        if ((str[i] == "_" || str[i] == "-")) {
            nStr += str[i+1].toUpperCase()
            checker = true;
            continue;
        }
        if (checker == true) {
            checker = false;
            continue;
        }
        nStr += str[i];
    }
    return nStr;
}