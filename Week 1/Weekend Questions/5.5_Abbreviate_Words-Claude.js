function abbreviateWords(str) {
    let final = str.slice(0,1) + "." + str.slice(str.indexOf(" ") + 1, str.indexOf(" ") + 2);
    return final;
}