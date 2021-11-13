function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    let arr = [0,1,1];
    if (n<=3) {
        return arr[n-1];
    }
    for (let i = 3; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n-1];
}