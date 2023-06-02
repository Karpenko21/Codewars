function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof x[i] === "string") {
            sum += Number(x[i]);
        } else {
            sum += x[i];
        }
    }
    return sum;
}