function isString(str, func) {
    if (typeof(str) == "string") {
        func(str);
    }
}

isString("Hello", console.log)

function firstWordUpperCase(str, func) {
    let nStr = str[0].toUpperCase();
    nStr += str.slice(1);
    return func(nStr);
}

function dashes(str) {
    return str.replace(/ /g, "-");
}

console.log(firstWordUpperCase("hello my name is blank", dashes));

firstWordUpperCase("hello there", console.log)

function callback(str, func) {
    str.toLowerCase();
    func(str);
}

callback("hello THERE", console.log);