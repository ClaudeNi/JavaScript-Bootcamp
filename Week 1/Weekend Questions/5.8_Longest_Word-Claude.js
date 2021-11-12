function longestWord(str) {
    if (!str.includes(" ")) {
        return str.length;
    }
    let length = 0;
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " " && str[i-1] != " ") {
            if (length < num) {
                length = num;
            }
            num = 0;
            continue;
        }
        num++;
    }
    return length < num ? num : length;
}