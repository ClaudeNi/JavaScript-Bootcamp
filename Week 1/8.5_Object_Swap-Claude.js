const book = {
    name: "Jojo's Bizarre Adventure",
    author: "Araki Hirohiko",
    year: "1987",
}

function objectSwap(obj) {
    const nObj = {};
    for(let i in obj) {
        nObj[obj[i]] = i;
    }
    return nObj;
}