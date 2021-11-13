function tribonacci(n) {
    if (n == 0) {
        return [];
    }
    switch (n) {
        case 1:
            return [0];
        case 2:
            return [0, 0];
        case 3:
            return [0, 0, 1];
    }
    let arr = [0, 0, 1];
    for (let i = 3; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}