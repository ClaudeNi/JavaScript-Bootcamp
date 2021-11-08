function boom(n) {
    let hasSeven = false;
    for (let i = 1; i <= n; i++) {
        for (let j of i.toString()) {
            if (hasSeven == false && j % 7 == 0) {
                hasSeven = true;
            }
        }
        if (i % 7 == 0 && hasSeven) {
            console.log("BOOM-BOOM");
        } else if (i % 7 == 0) {
            console.log("BOOM");
        } else {
            console.log(i);
        }
        hasSeven = false;
    }

}