function withFor(num) {
    for (let i = num; i > 0; i--) {
        console.log(i);
    }
}

function withRecursive(num) {
    if (num == 0) {
        return 0;
    }
    console.log(num);
    withRecursive(num-1);
}

function withoutExit(num) {
    console.log(num);
    withoutExit(num-1);
}