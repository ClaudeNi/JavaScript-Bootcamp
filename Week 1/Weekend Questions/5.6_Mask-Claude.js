function maskify(str) {
    if (str.length <= 5) {
        return str;
    }
    let maskedStr = "";
    for (let i = 0; i < str.length - 4; i++) {
        maskedStr += "#";
    }
    return maskedStr += str.slice(-4);
}