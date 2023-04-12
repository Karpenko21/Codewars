function countBy(x, n) {
    let z = [];
    for (let i = x ; i <= n * x ; i++) {
        if (i%x === 0) {
            z.push(i);
        }
    }
    return z;
}