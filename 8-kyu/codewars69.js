function rentalCarCost(d) {
    let sum = 0;
    if (d >= 7) {
        sum = d * 40 - 50;
    } else if (d >= 3) {
        sum = d * 40 - 20;
    } else {
        sum = d * 40;
    }
     return sum;
}