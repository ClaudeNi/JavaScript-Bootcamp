function steps(N) {
    let space = N - 1;
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("*");
        }
        if (i != N) {
            for (let k = space; k > 0; k--) {
                process.stdout.write(" ");
            }
        }
        console.log("");
        space--;
    }
}