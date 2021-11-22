function solution(a, b) {
    if (a.length == 0) {
        return 0;
    }
    if (b[0] == 0) {
        a.shift();
        b.shift();
        return 1 + solution(a, b);
    }
    if (b[b.length - 1] == 1) {
        a.pop();
        b.pop();
        return 1 + solution(a, b);
    }
    let currentFish = 0;
    while (true) {
        if (b[0] != b[1]) {
            if (a[0] < a[1]) {
                a.shift();
                a.shift();
                b.shift();
                b.shift();
                return 1 + solution(a, b)
            }
        }
        if (b[currentFish] != b[currentFish +1 ]) {
            if (a[currentFish] < a[currentFish + 1]) {
                a.splice(currentFish, 2, a[currentFish + 1]);
                b.splice(currentFish, 2, b[currentFish + 1]);
                if (!a[currentFish - 1]) {
                    return 1 + solution(a, b);
                }
                return solution(a, b);
            } else {
                a.splice(currentFish, 2, a[currentFish]);
                b.splice(currentFish, 2, b[currentFish]);
                return solution(a, b);
            }

        }
        currentFish++;
        if (a.length == 0) {
            return 0;
        }
    }
}